/* Projects layout
    {
        title: string,
        url: string;
    }

*/
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./project.module.css";
// icons
import Github from "../icons/github";

var previousObject = 1;
const handleChange = (event, value) => {
    console.log(event);
    document.getElementById(previousObject.toString()).style.display="none";
    document.getElementById(value.toString()).style.display="block";
    previousObject=value;
    return true;
};
export default function Project({projects}){
    if(projects){
        var number_of_projects = projects.length;
        var id=0;
        return (<>
            <Grid container maxWidth>
                <Grid item xs={12} justifyContent="right" alignItems="right" sx={{display: "flex"}}>
                    {
                        projects.map((item)=>{
                            id++;
                            if( id === 1 ){
                                return (<div id={id.toString()}
                                        style={{display: "block",}}>
                                    <ProjectCard
                                        title={item.title}
                                        url={item.url}
                                    /></div>);
                            }
                            else{
                                return (<div id={id.toString()}
                                        style={{display: "none"}}>
                                    <ProjectCard
                                        title={item.title}
                                        url={item.url}
                                    /></div>);
                            }

                        })
                    }
                </Grid>
                <Grid item xs={12} justifyContent="right" alignItems="right" sx={{display: "flex",}}>
                    <Pagination count={number_of_projects} variant="outlined" color="secondary"
                        onChange={handleChange} className={styles.Navigation}
                        siblingCount={0}/>
                </Grid>
            </Grid>
        </>);
    }
    return(<></>);

}

function ProjectCard({title, url}){
    return (<>
        <Grid container maxWidth sx ={{padding: 2}} className={styles.ProCon}>
            <Grid item xs={12} align="right">
                <Avatar
                    className={styles.Image}
                    alt={title}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFZklEQVR4nO2aW2wUVRjHf2d2aaVcCoi02yqXcltBKBVqRSCgBSyXilqMN6ohaPQB8NIXxMQHQ+ILiQoRFYxEAX0oihdWLqGoIQYqiLQFuSNR2lKgtNau0O7uHB+GZbbd2WWVmd1C55ds+s053+x857/fuU7BxsbGxsbGxsbGxsbGpvMhruUwY8bTPX2iZTGChwE30M36sK4LL3AYxFdd1KSVW7ZsaIrmHFWA6TOL8lQhNgEuMyOMIzWqEI/s3Fz6cySHiAJMLyxyq6rYA6RaElr8aAwExL3fby09alTpjHSXqiqrQKYC9OjRnefnF5M3Loc+fXpbFagpXLzYQPne/axeu47mZi9AL4dDvgdMNfI3zID8GY+NEIo8BOBwOHh3+TKGDx1iWdBWcPzkKRaXLMXvDwAQCAi3URYoRjcLhYlBO3dszg3XeIChg7MYm5N99dqpyElGfoYCIGW/oDlowB1mxxY3sgYOuGpLSDfyMRZA0ccGZ5eIw0SHp03sivF4ZyxAJ8IWINEBJBpbgEQHkGg6vQAdYo7b/Dv8WA3jXfDo4Pg+O+EZ4PXBD9UQkLDnbPyfn3ABKi+AKjW7f4/4P99SAWq8sP0PqL8c2afigm5n99XtZh+U10FDi3XxgYVjQFU9rD8CPlWzS3LCfbw+OPGXZgtgdIgAH/8Gp5ugqxMWjIAsi04lLMmAn2rhk8Na4wGSIjylsl5P/4E9ITVJr/Npu1gu+eGDg1pXsQJTBZCA5zR8cUJvWHoKFLuN/SvO6/aY29rWzXND72TN9quaoLtqzIxWwzQBAhI+Pwplf+plWamwKBt6JYf7R0t/gLQUeGkMZF45gpXAppPalCnNChoTBdhVDfvO6dej+8KLd2l92Iho6R+kZxIszAZ3yCnczjNQbuJ0aZoAot3hmpTRf6lo6R+KU4FuXdqW/d36n8OLiGkCTMyAcf3066p6eL9KS/X2XCv9g1z2w+qD8EtIZrl7w+TbzYraRAEcAp4cDvkhJ2inm2BFRfg6IJb0b2yBlZVwvFEvy02DBSMjzyr/B1NnAQHMGghFQ0C50iXOX4J1R9r6xZL+nx6BWq9+Pa0/PDFME9pMLFkITXBpA1hwIRRKrOkfXAcoQtsg3WfRuynLVoKjboXF2XDoopa6QWJJf4Bn79T6/tBe1q0CweLtcGZ37RPKgRhH/75d4cEBkevNIu67wepm7W+09I8ncRdgciYkO7RfN1L6x5O4nwhN6699OgoJPxBJNLYAiQ4g0Ri/HlfFyaCd6TJ8qXpDkJGuxy6kPGHkYyjAhHtGbhDI4iUli3hgiuFr9RuC/PsnsaRkEQJZPCF31GdGPlFX1lJKM88eEoYQ7TfrOp1+DBD5Mx8fJkRgKzDoer/M6XRQNGc2z82f16b8THUtr72xjLN15yLc2RZXehpvvfk6mRltd0Br1q7jy689V//v5zo5JYQsUBQRmIsJjQfw+wN849kWVr67fG/MjQeoPVvH7vJ9YeXferab1XiALBUxV5EC0xakTqeTOYUFYeXj83LJcKUZ3GFMhiuN8Xnjwsofml2A02ne4lVAspg2a26JhOUAswqm8vLCF0x7QEfk7ZUf8t22HdqFlK8qQshjwcpfK6rw+QwO8W4SWlt97D9QqRcI5ZiSLFrLgEaAmto6Vqz66KYUobXVx4pVa0LHogZvCjsFQGg3AG0UvnvMKFzpsffbjkxNbR37D1S2H4hf2eHZ+E5wgSCmzi5ajxRPJSC+uCNhfZln4zOAdAQLTx07vGnQ8JFNAvKAWxIXnqU0AEvLPBuXcOW9TdgSsbCwMKVFJuWrKkMQ4uboA1LWScTxf7qJst2lpZdCq/4FNh6c10taj04AAAAASUVORK5CYII="
                    sx={{ width: "70px", height: "70px", bgcolor: "#FFFFFF",transform: "translateY(-10px)", position: "flex", alignSelf: "right", padding: "1em" }}
                />
            </Grid>
            <Grid item xs={12} sx = {{textAlign: "right", fontWeight: "500", fontSize: "1.1em"}}><b><i>{title}</i></b></Grid>
            <Grid item xs={12} sx = {{textAlign: "right"}} >
                <a href={url} className = {styles.Link} > <Github /> GitHub </a>
            </Grid>
        </Grid>
    </>);
}
