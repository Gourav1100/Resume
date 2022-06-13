import Grid from "@mui/material/Grid";
import styles from "./techstack.module.css";

export default function TechStack({urls}){
    return(
        <>
           <Grid container maxWidth sx={{textAlign: "right", display: "flex"}}
           justifyContent="right" alignItems="right" spacing={2}>
           { urls?(urls.map((item)=>{
                return (
                <Grid item xs={3} md={2} sx={{padding: 2, textAlign: "center"}}>
                    <img src={item} className={styles.Image} />
                </Grid>);
           })):(<></>)}
           </Grid>
        </>
    );
}
