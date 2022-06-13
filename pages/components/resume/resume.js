import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import EduCard from "../educard/educard";
import ExpCard from "../expcard/expcard";
import Grid from "@mui/material/Grid";
import Projects from "../project/project";
import TechStack from "../techstack/techstack";
import styles from "./resume.module.css";
// icons
import Call from "../icons/call";
import Email from "../icons/email";
import Github from "../icons/github";
import Leetcode from "../icons/leetcode";
import LinkedIn from "../icons/linkedin";
import Location from "../icons/map";
import Wave from "../icons/wave";

export default function Resume() {
    return (
        <>
            <Container
                className={styles.Container}
                maxWidth
                sx={{ backgroundColor: "#2d3436", padding: 4, }}>
                <Grid maxWidth container
                    spacing={4}>
                    <Grid item xs={12} lg={3} justifyContent="center"
                    alignItems="center" sx={{display: "flex"}}>
                        <Avatar
                            className={styles.Image}
                            alt="Gourav Bidhuri"
                            src="/static/images/avatar/gourav.jpg"
                            sx={{ width: 300, height: 300, bgcolor: "#002699", fontSize: 50, }}
                        />
                    </Grid>
                    <Grid item xs={12} lg={6} justifyContent="center"
                    alignItems="center" sx={{display: "flex"}}>
                        <Grid container
                            spacing={3}
                            alignItem="center"
                            justifyContent="center" >
                            <Grid item className={styles.Title} sx={{ textAlign: "center" }}>
                                <span> Gourav Bidhuri </span>
                            </Grid>
                            <Grid item >
                                <div className={styles.Description}>
                                    <i><b>Hi</b> , <Wave /> I am currently pursuing Computer Science at the Indian Institute of Technology Jammu. I usually spend my time on youtube learning about new technologies, keep stacking up new skills, and problem solving at LeetCode. My hobbies are playing football, playing pc games, and watching anime.
                                    </i>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3} sx={{display: "flex", textAlign: "left"}}>
                        <Grid container sx={{ padding: 2, }}>
                            <Grid item xs={12}>
                                <a className={styles.Link} href="https://github.com/Gourav1100">
                                    <Github /> Github
                                </a>
                            </Grid>
                            <Grid item xs={12}>
                                <a className={styles.Link} href="mailto: gauravb1100@gmail.com"
                                    sx={{ textOverflow: "ellipsis", overflow: "hidden" }}>
                                    <Email /> gauravb1100@gmail.com
                                </a>
                            </Grid>
                            <Grid item xs={12}>
                                <a className={styles.Link} href="https://leetcode.com/_Gouravb1100_/">
                                    <Leetcode /> LeetCode
                                </a>
                            </Grid>
                            <Grid item xs={12}>
                                <a className={styles.Link} href="tel: +91 8178181366">
                                    <Call /> +91-8178181366
                                </a>
                            </Grid>
                            <Grid item xs={12}>
                                <a className={styles.Link} href="https://www.linkedin.com/in/gourav-bidhuri-643229214/">
                                    <LinkedIn /> LinkedIn
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={styles.Link} href="http://maps.google.com/?q=Greater Noida, Uttar Pradesh">
                                    <Location /> Greater Noida , U.P.
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            {/* content of resume */}
            <Container maxWidth className={styles.Container}
                sx={{ padding: 2, }}
            >
                <Grid container maxWidth
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={12} lg={6}
                        sx={{ paddingRight: 2 }}>
                        {/* Left Pane */}
                        <Grid container maxWidth className={styles.VerticalPanel} sx={{ padding: 1 }}>
                            <Grid item className={styles.Title} xs={12} sx={{ textAlign: "right", }} >
                                <span> Experience </span>
                            </Grid>
                            <Grid item xs={12} >
                                <ExpCard
                                    title="Hackathon - HTB 2.0"
                                    starttime="4th October 2021"
                                    endtime="13th November 2021"
                                    logo="/static/images/avatar/hackathon.jpg"
                                    description="In this hackathon, we needed to develop
                                a platform for the people to give anonymous feedback
                                to the military regaring the issue people faced. I developed
                                the frontend for this hackathon using Angular. We used Angular,
                                noSQL, and python for PS implementation."
                                    document="https://drive.google.com/file/d/1iwpGZAz8PIU3jETJFZIVt0boiDsyMvHH/preview" />
                            </Grid>
                            <Grid item xs={12} >
                                <ExpCard
                                    title="Development Team Head"
                                    starttime="January 2022"
                                    endtime="January 2023"
                                    logo="/static/images/avatar/coding_club.jpeg"
                                    description="I served as the head of the development
                                team at the Coding Club of IIT Jammu. During my
                                leadership, we organised various workshops on Web-Development,
                                App-Development, and Hackathons." />
                            </Grid>
                            <Grid item xs={12} >
                                <ExpCard
                                    title="Flipr Hackathon"
                                    starttime="6th May 2022"
                                    endtime="11th May 2022"
                                    logo="/static/images/avatar/flipr.png"
                                    description="In this hackathon, we needed to develop
                                a platform for a decentralised banking system, we needed
                                create a system in which all the loan offers and requests we
                                created by the users, and email notifications were to sent
                                regarding the same. We used ReactJS, MongoDb, NodeJS, Azure server
                                for implementing it."
                                    document="https://drive.google.com/file/d/1KLwVG9wSYglyDfTuFZ_rSgeHexCM0N0D/preview" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6}
                        sx={{ paddingRight: 2 }}>
                        {/* Right Pane */}
                        <Grid container className={styles.VerticalPanel} sx={{ padding: 1 }} justifyContent="right" alignItems="right">
                            <Grid item className={styles.Title}>
                                <span> Education </span>
                            </Grid>
                            <Grid item xs={12}>
                                <EduCard
                                    title="Indian Intitute of Technology Jammu"
                                    starttime="November 2020"
                                    endtime="Present"
                                    logo="/static/images/avatar/iitjammu.jpg"
                                    location="Jammu, Jammu and Kashmir"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <EduCard
                                    title="Ram-Eesh International School"
                                    starttime="March 2007"
                                    endtime="July 2020"
                                    logo="/static/images/avatar/rameesh.jpeg"
                                    location="Gautam Buddha Nagar, U.P."
                                />
                            </Grid>
                        </Grid>
                        <Grid container className={styles.VerticalPanel} sx={{ padding: 1 }} justifyContent="right" alignItems="right">
                            <Grid item className={styles.Title}>
                                <span> Projects </span>
                            </Grid>
                            <Grid item xs={12} sx={{ padding: 2 }}>
                                <Projects
                                    projects={[{
                                        title: "Change With Tip",
                                        url: "https://github.com/Gourav1100/change-with-tip"
                                    }, {
                                        title: "Loan Lending Platform",
                                        url: "https://github.com/Gourav1100/Loan-Lending-Platorm"
                                    },
                                    {
                                        title: "Media Player",
                                        url: "https://github.com/Gourav1100/mediaplayer"
                                    },
                                    {
                                        title: (<div style={{ fontSize: "0.9em" }}>Classroom Management System<br /> (IIT Jammu)</div>),
                                        url: "https://github.com/Gourav1100/IIT_JMU_Classroom"
                                    },
                                    {
                                        title: "Face Landmark Recognition",
                                        url: "https://github.com/Gourav1100/FaceRecognition"
                                    },
                                    {
                                        title: "Mask Recognition",
                                        url: "https://github.com/Gourav1100/AI_MaskIdentifier"
                                    },
                                    {
                                        title: "Python Calculator",
                                        url: "https://github.com/Gourav1100/Tkinter_Calc"
                                    },
                                    {
                                        title: "DiscordBot",
                                        url: "https://github.com/Gourav1100/Programming-GamingBots"
                                    },]} />
                            </Grid>
                        </Grid>
                        <Grid container className={styles.VerticalPanel} sx={{ padding: 1 }} justifyContent="right" alignItems="right">
                            <Grid item xs={12} sx={{ display: "flex" }} justifyContent="right" alignItems="right" className={styles.Title}>
                                <span> Tech Stack </span>
                            </Grid>
                            <Grid item xs={12} sx={{ padding: 4 }}>
                                <TechStack urls={[
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
                                    "/static/images/avatar/sml.jpeg",
                                    "/static/images/avatar/arm.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
                                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
                                ]} />
                            </Grid>
                        </Grid>
                        <Grid container className={styles.VerticalPanel} sx={{ padding: 1, display: "flex" }} justifyContent="right" alignItems="right">
                            <Grid xs={12} item className={styles.Title} sx={{ display: "flex", }} justifyContent="right" alignItems="right">
                                <span> Passions </span>
                            </Grid>
                            <Grid item xs={12} sx={{padding: 1}}>
                                <Grid container maxwidth sx={{display: "flex"}}
                                    justifyContent="right" alignItems="right">
                                    <Grid item xs={3} md={2} sx={{ textAlign: "center", }}>
                                        <img className={styles.Passion} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACr0lEQVRoge2av2sUQRTHP4mCREW0TZEi0crOH7WVIEQJFzBaaBHT2Fr4D1gZq/wBWgTEQiSdViFFqggq2FiqJOKPKJ4QERT1LDZndt9ucrMz7+0cZD5wcHvcfOfNzuyb7705SCQSiUQisZtpAZ+Bj8CFyLGYMwB8ADqbr9W44dgzxtZgO2QzbcqgdQc9OCWuX1p3GHvAJ8X1M+sOYw9YzvDzKFE0xADQpvgMj0aNyJijFAf7lewmmOKzpA8Aj4CfwGNgv2ffJ8T1C7KB9+I8sAa8A8559l2LuxRn5rqnzqzQmXVs9yXXZgM4VqfTujM8CcyIz37X1OgiM7RrwtrIvT8I3Af2esawI8MU724HeAUMeWhVJawxx7bXRLsOcMsjhp4BPhGd/AJOe+qFJqyHov0f4IxnLJXcoHxXbwboXRJaizXbHyHz3XmN18ChgJj+cxz4IcSXgT0BmneE3m0PjbPAX6EzHxATAPvI/G1etA2MBOouCc2LnjpzlFfe5ZDA1AXRdViqE2KyZNB3WCqPnGVSCE1YVQQnVcu0r5GwJEHb5gzlu6W5sS8K7Skl3WGyikltY/ReNFpBz7qFOCwXWpQnazr/hSov7fKLxZdR4HDu+htZboiK5ZKeEroaCauL95IGu6RlkbBAwetbbUtaDkui4vW1jYdVDUvV62taS4salrrX1xS0cFgWXl9tyWgnLCuvD+gkBc2EZVoAgPC0r52wzEs8EFbEk6eEbfwTlrXXLzBZ0dlVh3aaDmtNaD2lhtevW5deAO6Jz1xmyrcGXUW+v+/AFfxr4050j1rawAOyrasXmj8Jx4E3wNvN931HOiWkgVPC7WjiQFw+v66nhCbEGLD53xp2ookB76q/NUC5CqFZw+pL8kZhlYgJqykmgHXgE326byYSiUQikWiGf+6wgrX03/lTAAAAAElFTkSuQmCC"/>
                                    </Grid>
                                    <Grid item xs={3} md={2} sx={{ textAlign: "center", }}>
                                        <img className={styles.Passion} src="data:image/png;base64,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" />
                                    </Grid>
                                    <Grid item xs={3} md={2} sx={{ textAlign: "center", }}>
                                        <img className={styles.Passion} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEwklEQVRoge3aeajVRRTA8c9zq1D0vdRMW56YmSVFJSKlLSJkpf0RhBQiRGUFSQX9G0QEQf+0QNCObQQtFIFgVoYZVBa0oFJuuSBmi09TM31lrz/m3nrvvvkt93cXX3C/cBDnzcw55zczZ2bOXFq0aNGixcClrQk6zsVMnIOz0IGR6MFB7MNWfI+1pX//V7ThcjyP3YJj1chuPFvqoxkDUphhuBUbVe9kkmzELaW+BxQLhGlZL0crZQvmN82bFDrwlsY5WilvoL0pnkWYge0ZBjZCtmF6UaOLBoWrhZEdXkWbg/gYa7AOm4QIvQ+DMArjMAUXCUFrtvj6PYQbsLKY+dVxHbrlH5GVWIgTC+jqwBJ8Hem3WxPW9WU4HFEekxW4uI665+HbCh2/Y1YddfRhAn6S7egeXN8gGwbjHvxRoW98vRUNwmrZzq7CqfVWHmGaEAPKej8q2ZhJ3qB1J57KqPOqcEj4M0d/Q4Qofz46Mbpkyz5hxNbhSxxI6eNkvCsENrgdz+XQnclYdEkf2WXyfbyr8JoQsbNmSzfex2LJJ60R+KRUf6/w4Wrm4QzDlgsjlsZcfJXRT5L8iJtS+m4XLhw9eKha5yoZhf0pxmwTto4kRuDFlPZZsjyj/zJThb15v3ATK8wdKcb8LWxTSZyJDSnt82xrWTOnN0tL7ZZU0aYfn6YY9EJKu4nYmdI2S/YKsaMa2vCFsKYLcYowijGDjuC0hHYd+m4ZReTBgjbPwTGMKdJ4YYpBz6S0eyelXV6ZVsTgEp8L5+yqeTzFoKQj440pbfLKUbVlOhbj0SINVyQYtD6h/jC1rduydBUxthcj8XbSH9OOY2cnlL+XUL4IZ+Q0Ko12taV0DmBX0h/THE7a/1YnlN+W16IM2oQsZy18V6TRUfEp1xmpO0FyRC8iaUExD3OLNIo5fFh8ViyK1K1FunFeEaNLJC3H1Cl9KFLWJYxkJRdUa1EGQ4XAk/cycALu7/X/bUWUbtH/yye9CrwZqVsP2YwLM+zsFO7Dm6t3sS+xbSmp05UZhtcix4S79gLh9Ec4Sc3Gk/67ah6s1eHHIsr3JNT9oIEO55U8iYfUNfxZpGyMsF4qqfnr1oG07Mi/pDm8Sv8ANRiTInV35DSqkWzPUynN4b3iozwjUrYhj7IGk8uGrEzfy5GyOZGypNNXM6mLDbEUz8/CPlnJescnWJUD1rg8DmWN8G9C6O/NWOFtqZJleRQ2iBXCI0FdGC2s595f9MNIvZGRes2SS+vlbJklESWXROrd22RHe6TcfWthkHB8661orf5LYkipvFnOdqnPHTzKeOGk1Vvh3ZF6E/FrnRxKk2PC021DmSU8UZaVHhEeryuZKd9zSi2ytAH+RZmv74P4TvGU7Uz8ov6O/qXGZHsR5uk7guvE98FO6cn8amUXrmiQT5lMFy7aZWM2iZ+zB+Muta3ro0LaeFTDvMlJO17XN2omBZLhwuv9N6ob0Udwer0MrtdP+67FE5gsGPoK7hNGNcYkXCmkhiYLr4xDhLTSDiHruEb4OLGU0oBgKG4WjO0RzuAPOI4/JGsWbUL65WlhSh7GS7gGJx1Hu9CcX6tOEbaoqcLhZTt+EH6buVWY9gN22rZo0aJFi2byD2Vym3tXti/KAAAAAElFTkSuQmCC"/>
                                    </Grid>
                                    <Grid item xs={3} md={2} sx={{ textAlign: "center", }}>
                                        <img className={styles.Passion} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAACmklEQVRoge2aT2sUMRiHn5W1YkUPih501wpSdF3RU79RpX4V/4LUkyePPatUsB4UteK1IvXiwVYvWi26KFYX6iEzGqaTmSSTmY3r+8DLhp1N8vtN5k1mJguCIAiCIAiCIPjQCtjWYeA40AWmkvIx4AhwCDgI7APawP6kzgAYAt+AT8Bn4APwHngLrCWxDnwMIdLVcBs4CfSB08lnDzgFTIYQVMB34HUSr7TPN6iTFozdwEXgKbAFbEcWW8ATYC7RWomjwPMITNnGcqLZizbwLAITrvECz5Gei0C8b1zwMfw4AuG+8chkyjRL70EtGZUngRExRC19P7IHdhkq9Pl3zYKaf3p5B0yGz9enpTFyPZgMn6tRSFPkevjvRtjEBuUz4T3UvXIHWLT4fdVw7W/D1mzHUkBHq9NtwLBPf3odIP+Sts3fd1p53bJO0+zwkmc41vy9hRqxblK2wcrLAsU5VEaonC7LWZucXrAxvGqovCMfCgiR02U5a5PTq1lh2Ut6LzDtYCx2plGejMxgPuOL2I1yF7hf0I5tpP2Z2is7nsZMkdhZB0FZQiw9VXLaFLNFhucjNuy77s/rIrM57HIPnRUQK0ZPLWCTcDkWOnz728Tw3H+iAdGjiqnUpH5Jx3qHFYI/3sTwmJJrOPcd0JhwJi3os9dX/m5yjRsD4ACYX/GMG9tpQTcc60N8CNbSgm54qWKjV1ApUkdcrajtQd6XZ1Fv7H0W9tuE3VzP0kr68NE2RJu0stz0aPAu6k1/3bSTvlz13ShqdAJ46NDYHerf+deZxM30EhZbRhOoR6qiy/sncIlmRjZLGzVf/CrQN0SNrNP+WB+4DrxErWNfgBXgMur/HaOmhzK+gtI2QGm9RkHOCoIgCIIgCHXxG1IY8+zKZIpqAAAAAElFTkSuQmCC"/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
