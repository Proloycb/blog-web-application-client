import { Archive, Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
} from "@mui/material";

const Post = ({ blog }) => {
    const { name, description, image, userName, userEmail, photo } = blog;

    const handleArchive = () => {
        const blogArchive = {
            userName,
            userEmail,
            photo,
            name,
            description,
            image,

        }
        fetch('http://localhost:5000/archive', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(blogArchive)
        })
            .then(res => res.json())
            .then(data => {
                
            })
    }
    return (
        <Card sx={{ margin: 5, width: '40vw' }}>
            <CardHeader
                avatar={
                    <Avatar src={photo} sx={{ bgcolor: "primary" }} aria-label="recipe">
                        {userName.slice(0, 1)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={userName}
            />
            <CardMedia
                component="img"
                height="300px"
                image={image}
                alt={name}
            />
            <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <Archive onclick={handleArchive()} />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Post;