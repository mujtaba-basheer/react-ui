import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { List, ListItem, Modal } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { Avatar } from '../../elements/Avatar';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import DisplayMedia from './DisplayMedia';

const Box = styled(MuiBox)({
  '&.mediaWrapper': {
    overflow: 'hidden',
    borderRadius: '8px',
    maxHeight: '400px'
  },
  '&.messageBody': {
    width: '90%',
    maxWidth: { xs: '307px', md: '400px' }
  },
  '&.messageContent': {
    backgroundColor: colors.lightgray[100],
    wordBreak: 'break-all',
    padding: '12px',
    borderRadius: '8px'
  },
  '&.mymessage': {
    marginBottom: { xs: '16', md: '20px' },
    '& .message-wrapper': {
      justifyContent: 'flex-end',
      '& .messageContent': {
        backgroundColor: colors.lightgray[300]
      },
      '& .messageBody': {
        marginLeft: 'auto'
      }
    }
  }
});

const loggedInUserId = '2';
const isUserCreator = false;
const creatorPhotoUrl =
  'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg';
const userPhotoUrl = 'https://picsum.photos/200/300';
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
interface Props {
  messages: {
    messages: MessageProps[];
    timestamp: string;
  }[];
  onClick?: (asst: MediaAssetsProps) => void;
}

export const MessageThread = ({ messages, onClick }: Props) => {
  const messageListRef = useRef<any | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  const handleOnClick = (asst: MediaAssetsProps) => {
    if (onClick) {
      onClick(asst);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <List ref={messageListRef}>
        {messages.map((days, index) => {
          return (
            <ListItem key={index}>
              <Box width={'100%'}>
                <Box textAlign={'center'} mb={'20px'}>
                  <Typography className="interSemibold12">
                    {days.timestamp}
                  </Typography>
                </Box>
                <Box>
                  {days.messages.map((msg: MessageProps, index: number) => {
                    const messageFromMe = msg.senderId === loggedInUserId;
                    const photo = messageFromMe
                      ? creatorPhotoUrl
                      : userPhotoUrl;
                    return (
                      <Box
                        mt={1}
                        mb={1}
                        className={messageFromMe ? 'mymessage' : 'othermessage'}
                      >
                        <Box
                          className="message-wrapper"
                          display={'flex'}
                          alignItems={'flex-end'}
                          gap={1}
                        >
                          <Box order={messageFromMe ? 1 : 0}>
                            <Avatar size={28} src={photo} />
                          </Box>
                          <Box width={'100%'}>
                            <Box className="messageBody">
                              <Box className="messageContent">
                                <Typography className="interRegular14">
                                  {msg.text}
                                </Typography>
                              </Box>
                              {msg.media && (
                                <DisplayMedia
                                  msg={msg}
                                  onClick={handleOnClick}
                                />
                              )}
                            </Box>

                            {isUserCreator && !messageFromMe && (
                              <Typography
                                sx={{ lineHeight: 1, mt: '4px' }}
                                className="interMedium12"
                              >
                                ${msg.messageCost}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </ThemeProvider>
  );
};
