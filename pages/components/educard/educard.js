import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import styles from "./educard.module.css";
// icons
import Calander from "../icons/calander";
import Location from "../icons/location";
export default function EduCard({title, logo, starttime, endtime, location}){
    return (<>
        <Grid container maxWidth sx ={{padding: 2}} className={styles.EduCon}>
            <Grid item xs={12} align="right">
                <Avatar
                    className={styles.Image}
                    alt={title}
                    src={logo}
                    sx={{ width: "70px", height: "70px", bgcolor: "#FFFFFF",transform: "translateY(-10px)", position: "flex", alignSelf: "right" }}
                />
            </Grid>
            <Grid item xs={12} sx = {{textAlign: "right", fontWeight: "500", fontSize: "1.1em"}}><b><i>{title}</i></b></Grid>
            <Grid item sx = {{textAlign: "right"}} xs={12}><Location /> <i>{location}</i> </Grid>
            <Grid item sx = {{textAlign: "right"}} xs={12}> from <Calander /> <b>{starttime}</b> </Grid>
            <Grid item sx = {{textAlign: "right"}} xs={12}> till <Calander /> <b>{endtime}</b> </Grid>
        </Grid>
    </>);
}
