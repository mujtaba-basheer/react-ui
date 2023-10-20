import { Box } from '@mui/material';
import { PostThumbnail } from '../../elements/PostThumbnail';
import { Lock } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { Modal } from '@mui/material';
import { useState } from 'react';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';

interface MediaAssetsProps {
  id: string;
  assetType: string;
  assetUrl: string;
}
interface MessageMediaProps {
  price: number;
  paidMedia: boolean;
  expiringDate: string;
  purchased: boolean;
  assets: MediaAssetsProps[];
  useTeaser?: boolean;
}

interface MessageProps {
  id: string;
  senderId: string;
  receiverId: string;
  messageCost: number;
  text: string;
  media?: MessageMediaProps;
}

const getAssetsType = (assets: MediaAssetsProps[]) => {
  const assetsMap: any = {};
  assets.forEach((asset) => {
    if (assetsMap[asset.assetType])
      assetsMap[asset.assetType] = assetsMap[asset.assetType] + 1;
    else assetsMap[asset.assetType] = 1;
  });
  const assetsBreakdown = Object.keys(assetsMap).map((key) => {
    return `${assetsMap[key]} ${key}${assetsMap[key] > 1 ? 's' : ''}`;
  });
  return assetsBreakdown.join(', ');
};

const isExpired = (media: MessageMediaProps) => {
  if (!media.paidMedia) return false;
  if (media.purchased) return false;
  const date = new Date(media.expiringDate);
  const now = new Date();
  return date.getTime() < now.getTime();
};

const expiringSoon = (media: MessageMediaProps) => {
  if (isExpired(media)) return false;

  const now = new Date().getTime();
  const expireDate = new Date(media.expiringDate).getTime();
  const timeDifference = expireDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  const formattedTime: string[] = [];

  if (days > 0) {
    formattedTime.push(`${days}d`);
  }
  if (hours > 0) {
    formattedTime.push(`${hours}h`);
  }
  if (minutes > 0) {
    formattedTime.push(`${minutes}m`);
  }

  return `Expires in ${formattedTime.join(' ')}`;
};

const MessageMedia = ({
  assets,
  purchased,
  media,
  onClick
}: {
  assets: MediaAssetsProps[];
  purchased: boolean;
  media: MessageMediaProps;
  onClick?: (e: MediaAssetsProps) => void;
}) => {
  const length = assets.length - 1;
  // TODO: Implement useTeaser. Just use the first image for now. if useTeaser is true and the media is locked, use the first image as a teaser
  return (
    <>
      <Box
        position={'relative'}
        mt={!purchased ? `${assets.length * 10}px` : 0}
      >
        {assets.reverse().map((asset, index) => {
          return (
            <Box
              key={index}
              className="mediaWrapper"
              onClick={() => onClick && onClick(asset)}
              sx={
                !purchased
                  ? {
                      position: index !== length ? 'absolute' : 'relative',
                      width: `calc(100% - ${(length - index) * 20}px)`,
                      top: `-${(length - index) * 10}px`,
                      left: `${(length - index) * 10}px`
                    }
                  : { marginTop: '4px', width: '100%' }
              }
            >
              {asset.assetType === 'image' ? (
                <PostThumbnail src={asset.assetUrl} />
              ) : (
                '<MuxPlayer />'
              )}
              {isExpired(media) && (
                <Box
                  position={'absolute'}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  width={'100%'}
                  height={'100%'}
                  left={0}
                  top={0}
                  sx={{
                    boxShadow: isExpired(media)
                      ? '0px 1px 0px 0px rgba(255, 255, 255, 0.15) inset'
                      : 'none',
                    borderRadius: isExpired(media) ? '8px' : '0',
                    background:
                      isExpired(media) && !media.purchased
                        ? colors.darkgray['200']
                        : 'transparent'
                  }}
                ></Box>
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

const CenterButton = ({
  media,
  onClick
}: {
  media: MessageMediaProps;
  onClick?: (media: MessageMediaProps) => void;
}) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick(media);
    }
  };
  // TODO: Replace with teaser detection mechanism
  if (media.useTeaser) {
    return (
      <PillButton
        variant="unlock"
        onClick={handleOnClick}
        background={colors.black}
        backgroundHover="rgba(0, 0, 0, 0.75)"
        text={`Unlock ${media.assets.length > 1 ? 'Full Set' : ''} for $${
          media.price
        }.00`}
      />
    );
  }
  return (
    <PillButton
      variant="unlock"
      onClick={handleOnClick}
      text={`Unlock ${media.assets.length > 1 ? 'Full Set' : ''} for $${
        media.price
      }.00`}
    />
  );
};

const DisplayMedia = ({
  msg,
  onClick
}: {
  msg: MessageProps;
  onClick: (asst: MediaAssetsProps) => void;
}): JSX.Element => {
  const [selectedAsset, setSelectedAsset] = useState<
    MediaAssetsProps | undefined
  >(undefined);
  if (!msg.media) return <></>;

  const handleAssetClick = (asst: MediaAssetsProps | undefined) => {
    if (msg.media?.purchased || !msg.media?.paidMedia) {
      setSelectedAsset(asst);
      return;
    }

    if (!asst) return;
    onClick(asst);
  };
  return (
    <>
      <Modal
        open={!!selectedAsset}
        onClose={() => setSelectedAsset(undefined)}
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000'
        }}
      >
        <img src={selectedAsset?.assetUrl} alt="" />
      </Modal>
      <Box
        position={'relative'}
        onClick={() => handleAssetClick(msg.media?.assets?.[0])}
      >
        <MessageMedia
          assets={msg.media.assets}
          purchased={msg.media.purchased}
          media={msg.media}
          onClick={handleAssetClick}
        />
        {!msg.media.purchased && msg.media.paidMedia && (
          <Box
            position={'absolute'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            width={'100%'}
            height={'100%'}
            left={0}
            top={0}
          >
            {isExpired(msg.media) ? (
              <Box sx={{ opacity: '0.5' }}>
                <Lock color={colors.white} />
              </Box>
            ) : (
              <CenterButton media={msg.media} />
            )}
          </Box>
        )}
      </Box>
      {!msg.media.purchased || !msg.media.paidMedia ? (
        <>
          {isExpired(msg.media) ? (
            <Typography
              sx={{ lineHeight: 1, mt: '4px' }}
              className="interSemibold12"
            >
              Expired
            </Typography>
          ) : (
            <Box className="messageContent" mt={'4px'}>
              <Typography className="interRegular14">
                {msg.media.assets.length > 1 && 'Set'} Contents:{' '}
                {getAssetsType(msg.media.assets)}
              </Typography>
            </Box>
          )}
          {expiringSoon(msg.media) && (
            <Typography
              sx={{ lineHeight: 1, mt: '4px' }}
              className="interSemibold12"
            >
              {`${expiringSoon(msg.media)}`}
            </Typography>
          )}
        </>
      ) : (
        <Typography
          sx={{
            lineHeight: 1,
            mt: '4px',
            opacity: 0.5
          }}
          className="interSemibold12"
        >
          Unlocked
        </Typography>
      )}
    </>
  );
};

export default DisplayMedia;
