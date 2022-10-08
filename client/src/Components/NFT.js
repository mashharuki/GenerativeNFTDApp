import './../css/App.css';
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

/**
 * NFT component
 */
const NFT = (props) => {
    // get info from props    
    const { name, description, imageURL  } = props;

    return (
        <Card 
            variant="outlined" 
            className="card"
        >
            <CardContent>
                    <CardMedia
                        component="img"
                        className="cardMedia"
                        height="200"
                        image={imageURL}
                        title="NFT Image"
                    />
                    <Typography 
                        color="text.secondary" 
                        gutterBottom
                    >
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
            </CardContent>
        </Card>
    );
}

export default NFT;