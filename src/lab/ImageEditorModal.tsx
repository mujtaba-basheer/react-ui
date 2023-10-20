// react-pintura
import { PinturaEditorModal } from '@pqina/react-pintura';

// pintura
import '@pqina/pintura/pintura.css';

import {
  PinturaDefaultImageWriterResult,
  PinturaEditorOptions,
  createDefaultImageOrienter,
  // editor
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultShapePreprocessor,
  locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
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

  // plugins
  setPlugins
} from '@pqina/pintura';

import {
  LocaleAnnotate,
  LocaleCore,
  LocaleCrop,
  LocaleFilter,
  LocaleFinetune,
  LocaleMarkupEditor
} from '@pqina/pintura/locale/en_GB';
import { useEffect } from 'react';

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

const editorDefaults: PinturaEditorOptions = {
  utils: ['crop', 'finetune', 'filter', 'annotate'],
  imageOrienter: createDefaultImageOrienter(),
  imageReader: createDefaultImageReader(),
  imageWriter: createDefaultImageWriter(),

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
    ...LocaleCore,
    ...LocaleCrop,
    ...LocaleFinetune,
    ...LocaleFilter,
    ...LocaleAnnotate,
    ...LocaleMarkupEditor
  }
};

interface Props {
  /**
   * The image url to be edited, this is required to open the modal
   * @type string
   * @default ''
   * @required
   */
  imageUrl: string | File | Blob;
  /**
   * Whether the modal is open or not
   * @type boolean
   * @default false
   * @required
   *
   */
  open: boolean;
  /**
   * Callback function that closes the modal
   * @type function
   */
  onClose: () => void;
  /**
   *  Callback function that returns the edited image
   * @type function
   * @param {PinturaDefaultImageWriterResult} res - The edited image
   * @required
   *  The image can be uploaded to a server by using the res.dest property and creating a formData object
   *
   *  ```js
   *  const formData = new FormData();
   *  formData.append('file', res.dest);
   *
   *  const requestOptions = {
   *   method: 'POST',
   *   body: formData
   *  };
   *
   *  fetch('https://tmpfiles.org/api/v1/upload', requestOptions)
   *    .then((response) => {
   *      console.log(response);
   *    });
   * ```
   */
  onComplete: (result: PinturaDefaultImageWriterResult) => void;
}

export const ImageEditorModal = ({
  imageUrl,
  open = false,
  onClose,
  onComplete
}: Props) => {
  const handleError = (err?: any) => {
    console.error(err);
    onClose();
  };

  useEffect(() => {
    if (!imageUrl) {
      console.error('Image url is required to open the editor modal');
      return onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl]);

  return !!imageUrl && open ? (
    <PinturaEditorModal
      {...editorDefaults}
      src={imageUrl}
      onProcess={(res: any) => {
        onComplete(res);
      }}
      onClose={onClose}
      onLoaderror={handleError}
      onLoadabort={handleError}
      onDestroy={handleError}
      onHide={handleError}
      onProcesserror={handleError}
    />
  ) : (
    <></>
  );
};
