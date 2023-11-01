import { Stack } from "@mui/material";
import { Typography } from "../elements/Typography";
import { Modal } from "./Modal";

// pintura
import {
  createDefaultImageOrienter,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,
  legacyDataToImageState,
  locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
  // editor
  openEditor,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_filter,
  plugin_filter_defaults,
  plugin_filter_locale_en_gb,
  plugin_finetune,
  plugin_finetune_defaults,
  plugin_finetune_locale_en_gb,
  processImage,

  // plugins
  setPlugins,
} from "@pqina/pintura";
import * as FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

// filepond
import * as FilePondPluginImageEditor from "@pqina/filepond-plugin-image-editor";
import * as FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import * as FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css";
import "../styles/MediaUploadModal.scss";

import { useEffect, useRef, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import { PillButton } from "../elements/PillButton";

interface Props {
  /**
   * Title of the modal
   * @type string
   * @default Add Media
   *
   */
  title?: string;
  /**
   * Whether the modal is open or not
   * @type boolean
   * @default false
   * @required
   *
   */
  open: boolean;
  /**
   * The url to which the file is to be uploaded
   * @type string
   * @required
   */
  uploadUrl: string;
  /**
   * The auth headers to be sent with the post request like auth tokens
   * @type object
   * @required
   * @example
   * ```js
   *  {
   *    Authorization: 'Bearer token'
   *   }
   * ```
   */
  authHeaders: any;
  /**
   * Whether to allow multiple file upload or not
   * @type boolean
   * @default false
   */
  multiple?: boolean;

  /**
   * Accepted file types
   * @default image
   * @options image | video | both
   * @type string
   */
  acceptedFileTypes?: "image" | "video" | "both";
  /**
   * Whether to allow image editor or not
   * @type boolean
   * @default false
   */
  allowImageEditor?: boolean;
  /**
   * Whether to allow image preview or not after selection
   * @type boolean
   * @default false
   */
  allowImagePreview?: boolean;
  /**
   * Name of the key to be used for uploading the file, sent in the body of the post request
   * @type string
   * @default file
   */
  uploadObjectKeyName?: string;
  /**
   * Layout of the image preview
   * @default compact
   * @options compact | circle
   * @type string
   *
   */
  imageLayout?: "compact" | "circle";
  /**
   * Type of media that is being uploaded
   * @default PostMedia
   * @options ProfileMedia | PostMedia | MessageMedia
   * @type string
   * @example "PostMedia"
   *
   * Use PostMedia for uploading media for posts
   * Use ProfileMedia for uploading media for profile
   * Use MessageMedia for uploading media for messages
   *
   * note: when using this for profile picture upload, remeber to set the imageLayout to circle
   */
  mediaType?: "ProfileMedia" | "PostMedia" | "MessageMedia";
  /**
   * Maximum file size allowed
   * @default 250MB
   * @type string
   * @example "250MB"
   */
  maxFileSize?: string;
  /**
   * Maximum number of files allowed to be uploaded parallely
   * @default 1
   * @type number
   */
  maxParallelUploads?: number;
  /**
   * Maximum number of files allowed to be selected at once. To be used with multiple set to true
   * @default 1
   * @type number
   *
   * note: this is only applicable when multiple is set to true else it will be ignored
   *
   */
  maxFiles?: number;

  /**
   * Function to close the modal
   * @type function
   * @required
   */
  onClose: () => void;
  /**
   * Callback function that returns after the file is  uploaded. Called for every upload that gets completed.
   * @param imageUrl - The url of the uploaded image
   * @type function
   * @example (imageUrl) => console.log(imageUrl) // https://tmpfiles.org/api/v1/...
   * @required
   *
   * note: if multiple is set to true, the call back will be fired for every upload that gets completed
   *
   */
  onComplete: (imageUrl: string) => void;
}

export const MediaUploadModal = ({
  title = "Add Media",
  open = false,
  multiple = false,
  acceptedFileTypes = "image",
  allowImageEditor = false,
  uploadObjectKeyName = "file",
  imageLayout = "compact",
  mediaType = "PostMedia",
  maxFileSize = "250MB",
  allowImagePreview = false,
  maxParallelUploads = 1,
  maxFiles = 1,
  uploadUrl = "",
  authHeaders = {},
  onClose,
  onComplete,
}: Props) => {
  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImageEditor,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize
  );

  // pintura
  setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

  const filePondRef = useRef<FilePond>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [fileUrls, setFileUrls] = useState<any[]>([]);

  const GetAcceptedFileTypes = () => {
    switch (acceptedFileTypes) {
      case "image":
        return ["image/*"];
      case "video":
        return ["video/*"];
      case "both":
        return ["image/*", "video/*"];
      default:
        return ["image/*"];
    }
  };

  useEffect(() => {
    if (!uploadUrl) {
      console.error("File upload destination url was not provided");
      return onClose();
    }
    if (open) {
      setFiles([]);
      setFileUrls([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, uploadUrl]);

  return (
    <Modal
      size="medium"
      open={open}
      onClose={onClose}
      closeOnBackdropClick={false}
    >
      <Stack
        display={"flex"}
        flexDirection={"column"}
        flex={1}
        overflow={"scroll"}
      >
        <Stack>
          <Typography className="interMedium16">{title}</Typography>
        </Stack>
        <Stack>
          <Typography className="interRegular14">
            {`You can upload ${multiple ? "multiple" : "single"} files at once`}
          </Typography>
          <Typography className="interRegular14">
            {`Maximum upload file size is ${maxFileSize}`}
          </Typography>
        </Stack>

        <Stack>
          <FilePond
            onerror={(error) => {
              console.error("error", error);
              onClose?.();
            }}
            ref={filePondRef}
            credits={false}
            allowImageEditor={allowImageEditor}
            files={files}
            onupdatefiles={setFiles}
            maxParallelUploads={maxParallelUploads}
            maxFiles={multiple ? maxFiles : 1}
            allowFileSizeValidation={true}
            maxFileSize={maxFileSize}
            labelIdle={`<Stack display={'flex'} flexDirection={'column'}><Typography className="interRegular14">Drop ${
              files.length > 0 ? "more" : ""
            } files to upload</Typography><PillButton text={'Select files'} type="button"  /></Stack>`}
            acceptedFileTypes={GetAcceptedFileTypes()}
            allowMultiple={multiple}
            imagePreviewHeight={200}
            allowRevert={false}
            styleImageEditorButtonEditItemPosition="top"
            allowImagePreview={allowImagePreview}
            server={{
              process: {
                url: uploadUrl,
                ondata: (formData: any) => {
                  formData.append("mediaType", mediaType);
                  return formData;
                },
                headers: authHeaders,
              },
            }}
            name={uploadObjectKeyName ?? "file"}
            onprocessfile={(error, file) => {
              setFileUrls((prev) => [
                ...prev,
                {
                  ...file,
                  source: JSON.parse(file.serverId)?.data?.url,
                  options: { type: "local" },
                },
              ]);
              onComplete?.(JSON.parse(file.serverId)?.data?.url);
            }}
            stylePanelLayout={imageLayout}
            imageEditor={{
              legacyDataToImageState: legacyDataToImageState,

              createEditor: openEditor,

              imageReader: [createDefaultImageReader],

              imageWriter: [createDefaultImageWriter],

              imageProcessor: processImage,

              editorOptions: {
                imageOrienter: createDefaultImageOrienter(),
                shapePreprocessor: createDefaultShapePreprocessor(),
                ...plugin_finetune_defaults,
                ...plugin_filter_defaults,
                ...markup_editor_defaults,
                locale: {
                  ...locale_en_gb,
                  ...plugin_crop_locale_en_gb,
                  ...plugin_finetune_locale_en_gb,
                  ...plugin_filter_locale_en_gb,
                  ...plugin_annotate_locale_en_gb,
                  ...markup_editor_locale_en_gb,
                },
              },
            }}
          />
        </Stack>
        <Stack>
          <PillButton
            text={"Done"}
            type="button"
            disabled={files.length === 0 && files.length !== fileUrls.length}
            onClick={onClose}
          />
        </Stack>
      </Stack>
    </Modal>
  );
};
