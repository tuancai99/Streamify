import React from "react";
import "@fontsource/sora/700.css";
import { Divider, Fab, TextField, Paper, Typography, Button, IconButton, Box, Container, InputLabel } from "@mui/material";
import { Grid } from "@mui/material";
import "../styles/RoomComponent.css";
import settingImage from "../image_files/shape.png";
import directMessage from "../image_files/Message.png"
import userProfile from "../image_files/UserProfile.png"
import microphone from "../image_files/microphone.png"
import camera from "../image_files/Camera.png"
import SendMessage from "../image_files/SendMessage.png"
import carrot from "../image_files/carrot.png"
import screen from "../image_files/screen.png"
import edit from "../image_files/edit.png"
import play from "../image_files/play.png"
import multi from "../image_files/multi.png"
import sound from "../image_files/sound.png"

const Room = () => {
    return (
        <section class="background-image" >
            <Button variant="contained" 
                    style={{ 
                        backgroundColor: "#F6537A", 
                        width : '140px',  // Adjust width
                        height : '38px',  // Adjust height proportionally
                        top : "60px",
                        left : "30px",
                        color: "#500517",
                        border: '3px solid',
                        gap: "10px",
                        borderRadius : "30px",  // Adjust border radius
                        borderWidth : "3px",
                        fontSize: "12px",  // Adjust font size
                        borderColor : "#C11C44",
                        fontFamily : "Sora",
                        textTransform: 'none',
                        fontWeight: 'bold'
                    }}> 
                    &lt; Leave Room
            </Button>
            <Grid container spacing={1} alignItems="center"
                    style={{ 
                        position: "absolute", 
                        top: "calc(60px + 38px + 20px)", // Adjust the value to position it underneath the Leave button
                        left: "1%",
                        display: "flex",
                        flexDirection: "row", // Ensure horizontal alignment
                        alignItems: "center" // Align items horizontally
                    }}>  
                    <Grid item  style={{
                    }}>
                        <IconButton>
                        <img src={directMessage } alt="Button Icon" style={{width: "100%", height: "100%"}} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4"
                            style={{
                                fontFamily : "Sora",
                                fontWeight : 700,
                                fontSize : "18px",
                                color : "#FFFFFF",
                            }}
                        >Direct Messages</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center"
                    style={{ position: "absolute", 
                    top : "7.5%",
                    left: "35%",
                    display: "flex" // Position at the horizontal center
                }}>   
                    <Grid item>
                        <Typography variant="h4"
                            style={{
                                fontFamily : "Sora",
                                fontWeight : 800,
                                fontSize : "48px",
                                color : "#FFFFFF"
                            }}
                        >Your Amazing Den</Typography>
                    </Grid>
                    <Grid item >
                        <IconButton>
                        <img src={settingImage} alt="Button Icon" />
                        </IconButton>
                    </Grid>
                </Grid>
            
                <div style={{
                     position: "absolute",
                      left: "1%", 
                      bottom: "3%", 
                      backgroundColor: "#D9D6D699",
                      borderRadius : "30px",
                      width: "390px"}}>

                    <Grid container spacing={2} styel={{bottom: 0}}>

                            <Grid item style={{ display: "flex", alignItems: "center" }}>
                                <Fab  aria-label="add" 
                                    style={{ 
                                        backgroundColor: "#79B0F2",
                                        borderColor: "#4593F2",
                                        borderWidth: "3px", 
                                        borderStyle: "solid" 
                                    }}>
                                        AS
                                </Fab>
                            </Grid>

                            <Grid item style={{ display: "flex", alignItems: "center" }}>
                                <Fab  aria-label="add" 
                                    style={{ 
                                        backgroundColor: "#FF8652",
                                        width: "45px",
                                        height: "45px"
                                        }}>
                                    <img src={microphone} alt="User Profile" style={{ width: "25px",
                                        height: "25px"}}/>
                                </Fab>
                            </Grid>

                            <Grid item style={{ display: "flex", alignItems: "center" }}>
                                <Fab aria-label="edit" style={{
                                     backgroundColor: "#F6F6F6",
                                     width: "45px",
                                        height: "45px"
                                }}>
                                    <img src={camera} alt="User Profile" style={{ width: "20px",
                                        height: "20px"}} />
                                </Fab>
                            </Grid>

                            <Grid item style={{ display: "flex", alignItems: "center" }}>
                                <img src={carrot} alt="User Profile" />
                            </Grid>

                            <Grid item style={{ display: "flex", alignItems: "center" }}>
                                <Divider orientation="vertical" style={{
                                     backgroundColor: "white", 
                                     width: "1.5px",
                                     height: "40px", // Set height to make it shorter
                                }}/>
                            </Grid>

                            <Grid item style={{ display: "flex", alignItems: "center" }}>
                                <Fab variant="extended"
                                    style={{
                                        backgroundColor: "#26E5B7",
                                        borderColor: "#13C096",
                                        borderWidth: "3px", 
                                        borderStyle: "solid",
                                        width: "115px",
                                        height: "35px"                                                                            
                                    }}>
                                    <Typography variant="h4"
                                        style={{
                                            fontFamily : "Sora",
                                            color: "#034737",
                                            fontWeight: 'bold',
                                            textTransform: 'none',
                                            fontSize: "15px"
                                        }}>
                                            Invite &nbsp;  +
                                    </Typography>
                                </Fab>
                            </Grid>
                        </Grid>  
                </div>

                <div style={{
                    position: "absolute",
                    left: "40%", 
                    bottom: "3%", 
                    backgroundColor: "#D9D6D699",
                    borderRadius : "30px",
                    alignContent: "center",
                    height: "55px",
                    width: "240px",
                    paddingLeft: "25px"}}>

                    <Grid container spacing={3} justify="space-between" style={{bottom: 0}}>
                        <Grid item style={{ display: "flex", alignItems: "center" }}>
                            <img src={screen} alt="User Profile" style={{ 
                                 width: "25px",
                                 height: "25px"}} />
                        </Grid>
                        
                        <Grid item style={{ display: "flex", alignItems: "center" }}>
                            <img src={edit} alt="User Profile" style={{ 
                              width: "20px",
                              height: "20px"}} />
                        </Grid>
                        
                        <Grid item style={{ display: "flex", alignItems: "center" }}>
                            <img src={play} alt="User Profile" style={{ 
                                width: "15px",
                                height: "15px"}} />
                        </Grid>

                        <Grid item style={{ display: "flex", alignItems: "center" }}>
                            <img src={sound} alt="User Profile" style={{ 
                               width: "25px",
                               height: "25px"}} />
                        </Grid>

                        <Grid item style={{ display: "flex", alignItems: "center" }}>
                            <img src={multi} alt="User Profile" style={{ 
                                width: "20px",
                                height: "20px"}} />
                        </Grid>
                    </Grid>
                </div>

                <div style={{
                    position: "absolute",
                    left: "65%", 
                    bottom: "3%", 
                    backgroundColor: "#D9D6D699",
                    borderRadius : "30px",
                    alignContent: "center",
                    height: "55px",
                    width: "400px",
                    paddingLeft: "15px",
                    borderRadius: "12px"}}>

                    <Grid container spacing={1} alignItems="center">  
                    <Grid item>
                    <IconButton>
                        <img src={SendMessage} alt="Button Icon" style={{
                            height: "25px",
                            wdith: "25px"

                        }}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                    <TextField 
                        id="filled-basic"
                        label="Type a message here..."
                        InputProps={{ // Custom props for the input element
                            style: {
                                fontSize: '14px', // Adjust the font size as needed
                                height: "40px",
                                textAlign: "center",
                                
                            },
                        }}
                        style={{
                            borderRadius: "12px",
                            backgroundColor: "#FFFFFF",
                            height: "40px",
                            width: "320px",
                            textAlign: "center"
                              
                        }}
                        >   
                    </TextField>
                    </Grid>
                    
                
                </Grid>

                </div>
              


        </section>
      
    );
};

export default Room;