import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../../styles/style.scss";
import { theme } from "../../theme";

// Import Swiper styles
import { ThemeProvider } from "@emotion/react";
import MuxPlayer from "@mux/mux-player-react";
import "../../../node_modules/swiper/swiper.min.css";
import "../../../node_modules/swiper/modules/navigation.css";
import "../../../node_modules/swiper/modules/pagination.css";
import { PostThumbnail } from "../../elements/PostThumbnail";

interface PostSliderProps {
  id: string;
  assets: {
    id: string;
    url: string;
    isFree: boolean;
  }[];
  initialSlide?: number;
  onUnlockMedia?: () => unknown;
}

export const PostSlider: React.FC<PostSliderProps> = ({
  id,
  assets,
  initialSlide,
  onUnlockMedia,
}) => {
  const checkImage = (url: string) => {
    return url.startsWith("https");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Swiper
          id={id}
          navigation={true}
          pagination={{ dynamicBullets: true }}
          modules={[Pagination, Navigation]}
          initialSlide={initialSlide}
          className="post-slider"
        >
          {assets.map((asset) => {
            return (
              <SwiperSlide key={asset.id}>
                {checkImage(asset.url) ? (
                  <PostThumbnail
                    onUnlockMedia={onUnlockMedia}
                    src={asset.url}
                    sx={{
                      maxHeight: "100dvh",
                      objectFit: "contain",
                    }}
                    isFree={asset.isFree}
                  />
                ) : (
                  <Box
                    sx={{
                      scrollSnapAlign: "start",
                      flex: "0 0 calc(100%)",
                      height: "calc(40rem)",
                      width: "calc(100%)",
                    }}
                  >
                    <MuxPlayer playbackId={asset.url} loop />
                  </Box>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </ThemeProvider>
  );
};
