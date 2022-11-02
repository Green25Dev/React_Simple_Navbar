import React from "react";
import {
    Stack, Avatar, TextField, Button,
    Card,
    CardHeader,
    IconButton,
    CardContent,
    CardActions,
    Collapse
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import {ExpandMore} from '../../../consts/style';

function PostCellComponent({children, userAvatar, userName, date, msgAvatar}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <React.Fragment>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar alt="user_avatar" src={userAvatar} />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={userName}
                    subheader={date}
                />
                {children}
                <CardActions disableSpacing>
                    <Stack direction={'row'} justifyContent={'space-between'} sx={{width: '100%'}}>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>

                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ChatBubbleIcon />
                        </ExpandMore>

                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </Stack>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Stack sx={{position: 'relative'}} direction={'row'} justifyContent={'flex-start'} spacing={3}>
                            <Avatar alt="user_avatar" src={msgAvatar} sx={{width: 100, height: 100}} />
                            <TextField id="comment" multiline minRows={3} label='Comment' placeholder="Write a comment..." variant="outlined" fullWidth />
                            <IconButton size={'large'} component="label"
                                sx={{
                                    position: 'absolute',
                                    right: 4,
                                    bottom: 1
                                }}
                            >
                                <input hidden accept="image/*" multiple type="file" />
                                <AddPhotoAlternateIcon />
                            </IconButton>
                        </Stack>
                        
                        <Button variant="contained" size="large" sx={{mt:3}}>Post</Button>
                    </CardContent>
                </Collapse>
            </Card>
        </React.Fragment>
    )
}

export default PostCellComponent
