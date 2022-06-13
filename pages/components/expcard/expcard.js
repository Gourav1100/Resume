import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import styles from './expcard.module.css';
// icons
import Calander from "../icons/calander";
export default function ExpCard({starttime,endtime,logo,title,description, document}){
    return (<>
        <Grid container maxWidth sx ={{padding: 2}} className={styles.ExpCon}>
            <Grid item xs={12} align="right">
                <Avatar
                    className={styles.Image}
                    alt={title}
                    src={logo}
                    sx={{ width: "70px", height: "70px", bgcolor: "#FFFFFF",transform: "translateY(-10px)", position: "flex", alignSelf: "right" }}
                />
            </Grid>
            <Grid item xs={12} sx = {{textAlign: "right", fontWeight: "500", fontSize: "1.1em"}}><b><i>{title}</i></b></Grid>
            <Grid item sx = {{textAlign: "right"}} xs={12}> from <Calander /> <b>{starttime}</b> </Grid>
            <Grid item sx = {{textAlign: "right"}} xs={12}> till <Calander /> <b>{endtime}</b> </Grid>
            <Grid item sx = {{textAlign: "right"}} xs={12} className={styles.Description}> {description} </Grid>
            {document?(
            <Grid item xs={12}>
                <iframe className={styles.frame} src={document} />
            </Grid>
            ): (
            <>
            </>
            )}
        </Grid>
    </>);
}
