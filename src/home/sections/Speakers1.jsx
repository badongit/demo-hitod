import React from "react";
import { Grid, Card, Avatar } from "@material-ui/core";
import FacebookIcon from "../common/icons/FacebookIcon";
import TwitterIcon from "../common/icons/TwitterIcon";
import InstagramIcon from "../common/icons/InstagramIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    card: {
        border: "1px solid transparent",
        transition: "all 250ms ease-in-out",
        "&:hover": {
            border: "1px solid rgba(var(--primary), 1)",
            color: palette.primary.main,
            "& $iconContainer": {
                opacity: 1,
            },
            "& .description": {
                color: palette.primary.main,
            },
        },
    },
    iconContainer: {
        position: "absolute",
        top: "calc(50% - 10px)",
        left: "50%",
        transform: "translate(-50%)",
        opacity: 0,
        transition: "opacity 250ms ease",
        "&:after": {
            content: '" "',
            position: "absolute",
            top: 0,
            marginTop: "calc(-50% - 4px)",
            height: 128,
            width: 128,
            background: "rgba(0,0,0, 0.67)",
            borderRadius: 300,
            overflow: "hidden",
            zIndex: -1,
        },
    },
    iconWrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
        borderRadius: 4,
        marginRight: 4,
        border: `1px solid ${palette.primary.contrastText}`,
        cursor: "pointer",
    },
}));

const Speakers1 = () => {
    const classes = useStyles();
    const speakerList = [
        {
            name: "Đặng Thị Thu Huế",
            imgUrl: "/assets/images/face-1.jpg",
            position: "Phó chủ nhiệm hoạt động",
        },
        {
            name: "Nguyễn Lương Hùng",
            imgUrl: "/assets/images/face-4.jpg",
            position: "Chủ nhiệm câu lạc bộ",
        },
        {
            name: "Nguyễn Đình Huân",
            imgUrl: "/assets/images/huan.png",
            position: "Phó chủ nhiệm học tập",
        },
    ];

    return (
        <section className="section section-bg-light-primary" id="leader">
            <div className="container text-center">
                <h1 className="mt-0 font-normal text-44">BAN CHỦ NHIỆM</h1>
                <p className="max-w-400 mx-auto mb-16">
                    Hy vọng trong nhiệm kỳ tới, với tinh thần và sức trẻ của
                    mình, Ban chủ nhiệm cùng với Ban quản trị sẽ hoạt động nhiệt
                    huyết, hết mình để gặt hái được nhiều thành công và phát
                    triển CLB hơn nữa.
                </p>

                <Grid container spacing={3}>
                    {speakerList.map((item, ind) => (
                        <Grid key={ind} item sm={4} xs={12}>
                            <Card
                                elevation={4}
                                className={clsx(
                                    "border-radius-12 px-6 pt-8 pb-4 text-center",
                                    classes.card
                                )}
                            >
                                <div className="mb-6 relative">
                                    <Avatar
                                        src={item.imgUrl}
                                        className="h-128 w-128 inline-block"
                                    ></Avatar>
                                    <div
                                        className={clsx(
                                            "flex flex-wrap justify-center",
                                            classes.iconContainer
                                        )}
                                    >
                                        <div className={classes.iconWrapper}>
                                            <FacebookIcon
                                                className="text-13 text-white"
                                                fontSize="small"
                                            />
                                        </div>
                                        <div className={classes.iconWrapper}>
                                            <TwitterIcon
                                                className="text-13 text-white"
                                                fontSize="small"
                                            />
                                        </div>
                                        <div className={classes.iconWrapper}>
                                            <InstagramIcon
                                                className="text-13 text-white"
                                                fontSize="small"
                                            />
                                        </div>
                                        <div className={classes.iconWrapper}>
                                            <LinkedinIcon
                                                className="text-13 text-white"
                                                fontSize="small"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h5 className="m-0 font-medium text-18">
                                    {item.name}
                                </h5>
                                <p className="description">{item.position}</p>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default Speakers1;
