import React from "react";
import {
    Stack, Box, Container, Chip, Divider, Grid, Paper, Typography, Avatar, Select, MenuItem, FormControl, TextField, Button,
    CardMedia,
    CardContent
} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import MainLayout from "../../MainLayout";
import PostCellComponent from "./PostCellComponent";

function Post() {

    const [postStatus, setPostStatus] = React.useState('Public');

    return (
        <MainLayout>
            <Box 
                sx={{
                    backgroundColor: '#f3f2ef',
                    pt: 10,
                    pb: 10
                }}
            >
                <Container maxWidth={'md'}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 5 }}>
                        <Grid item xs={12} md={12}>
                            <Paper elevation={15} sx={{minHeight: '150px', p: 4, borderRadius: '10px'}}>
                                <Typography variant="h4" component='h4' sx={{textAlign: 'left'}}>It's my Profile</Typography>
                            </Paper>

                            <Paper elevation={15} sx={{p: 3, mt: 4, borderRadius: '10px'}}>
                                {/* <Divider>
                                    <Chip label={'Create Post'} variant="outlined" color="secondary"  icon={<AddBoxIcon />}></Chip>
                                </Divider> */}

                                <Stack direction={'row'} justifyContent={'space-between'} spacing={2} sx={{mt: 3}}>
                                    <Avatar alt="user_avatar" src="/images/avatar/3.jpg" sx={{width: 60, height: 60}} />
                                    <TextField id="outlined-basic" multiline variant="outlined" sx={{mt: 3, width: '70%'}} />
                                    <FormControl variant="outlined">
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={postStatus}
                                            onChange={e=>setPostStatus(e.target.value)}
                                        >
                                            <MenuItem value={'Public'}>Public</MenuItem>
                                            <MenuItem value={'Friends'}>Friends</MenuItem>
                                            <MenuItem value={'Only'}>Only me</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>

                                <Stack direction={'row'} justifyContent={'space-between'} sx={{mt: 3}}>
                                    <Button startIcon={<AddPhotoAlternateIcon />} size={'large'} component="label">
                                        Photo
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>
                                    <Button startIcon={<VideoCameraBackIcon />} size={'large'} component="label">
                                        Video
                                        <input hidden accept="video/*" multiple type="file" />
                                    </Button>
                                    <Button variant="contained" size="large">Post</Button>
                                </Stack>
                            </Paper>

                            <Paper elevation={15} sx={{mt: 4, borderRadius: '10px'}}>
                                <PostCellComponent 
                                    userAvatar={'/images/avatar/1.jpg'}
                                    userName={'Steven Hawks'} 
                                    date={"Oct 29"}
                                    msgAvatar={'/images/avatar/3.jpg'}
                                >
                                    <CardContent>
                                        <Typography variant="h4" sx={{textAlign: 'left'}}>Lorem Ipsum</Typography>
                                        <Typography variant="h6" sx={{textAlign: 'left'}}>Don't know lorem Ipsum?</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim beatae totam tempora labore et aut voluptatem? Inventore recusandae itaque, eaque libero, est enim quos iusto totam provident laborum eos suscipit!
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        // height="194"
                                        image="/images/billlborard.jpg"
                                        alt="Paella dish"
                                    />
                                </PostCellComponent>
                            </Paper>

                            <Paper elevation={15} sx={{mt: 4, borderRadius: '10px'}}>
                                <PostCellComponent 
                                    userAvatar={'/images/avatar/3.jpg'}
                                    userName={'Christopher lee'} 
                                    date={"Feb 20"}
                                    msgAvatar={'/images/avatar/1.jpg'}
                                >
                                    <CardContent>
                                        <Typography variant="h4" sx={{textAlign: 'left'}}>It's new social media</Typography>
                                        <Typography variant="h6" sx={{textAlign: 'left'}}>Love to post here</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left'}}>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim beatae totam tempora labore et aut voluptatem? Inventore recusandae itaque, eaque libero, est enim quos iusto totam provident laborum eos suscipit!
                                        </Typography>
                                    </CardContent>
                                    <video src={'/video/birds.mp4'} width="100%" controls>
                                        Sorry, your browser doesn't support embedded videos.
                                    </video>
                                </PostCellComponent>
                            </Paper>
                        </Grid>

                        {/* <Grid item xs={12} md={4}>
                            <Paper elevation={15} sx={{minHeight: '600px', p: 4}}>
                                <Typography variant="h4" component='h4' sx={{textAlign: 'left'}}>Trend</Typography>
                            </Paper>
                        </Grid> */}
                    </Grid>
                </Container>
            </Box>
        </MainLayout>
    )
}

export default Post
