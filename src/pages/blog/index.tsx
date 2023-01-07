import * as React from 'react';
import {useFetch} from "../../component/hooks/useFetch";
import {PageRoot} from "../../component/common/page";
import {ContentLoading} from "../../component/common/loading";
import {API_URL} from "../../utils/constants";
import {BlogPost} from "../../component/models/blog_post";
import {Margin} from "../../component/common/margin";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import {SizeBox} from "../../component/common/space";

const BlogPage = () => {
    const query = `{
  user(username:"chandrudotxyz") {
    publication {
      posts {
        title
        brief
        slug
        dateAdded
        coverImage
      }
    }
  }
}`;
    const [isLoaded, error, result] = useFetch(API_URL.BLOG, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({query: query})
    })
    if (error) {
        return <PageRoot>
            <div> Error:</div>
            ;
        </PageRoot>
    } else if (!isLoaded) {
        return <ContentLoading></ContentLoading>
    } else {
        const blogPost: BlogPost = JSON.parse(JSON.stringify(result));
        return <PageRoot>
            <Margin top={"48px"}/>
            <Grid container spacing={{xs: 4, sm: 4, md: 6, lg: 6, xl: 6}}>
                {blogPost.data.user.publication.posts.map((post) =>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                        <CardActionArea href={"https://chandrudotxyz.hashnode.dev/".concat(post.slug)} target="_blank">
                            <Card sx={{maxWidth: 345, height: 250}}>
                                <CardContent>
                                    <CardMedia
                                        sx={{objectFit: "contain"}}
                                        component="img"
                                        height="140"
                                        image={post.coverImage ? post.coverImage : "/assets/images/thumbnail_blog.png"}
                                    />
                                    <Typography sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                    }}gutterBottom variant="h5" component="div">
                                        {post.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>

                    </Grid>
                )}
            </Grid>
        </PageRoot>
    }

}
export default BlogPage;