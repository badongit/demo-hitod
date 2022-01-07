import React from "react";
import { useState } from "react";
import { makeStyles, lighten } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    buttonGroupBG: {
        background: lighten(palette.primary.light, 0.9),
        "&>div": {
            transition: "all 250ms ease",
            "&:hover": {
                background: palette.primary.main,
                color: palette.primary.contrastText,
                borderRadius: 8,
            },
            [theme.breakpoints.down("sm")]: {
                textAlign: "center",
                width: "100%",
            },
        },
    },

    evenetCard: {
        display: "flex",
        padding: "1.5rem 3rem",
        borderRadius: 12,
        border: `1px solid rgba(0,0,0,0.14)`,
        transition: "all 250ms ease",
        "&:hover": {
            border: `1px solid rgba(var(--primary),1)`,
            background: "rgba(var(--primary),0.075)",
            "& .buy-ticket-button": {
                background: palette.primary.main,
                color: palette.primary.contrastText,
            },
        },
        "& .circle-holder": {
            marginRight: "3rem",
            border: "2px solid rgba(var(--primary),0.15)",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "1rem",
            flexDirection: "column",

            "& .circle-holder": {
                margin: 0,
                marginBottom: "1rem",
            },
        },
    },
}));

const EventSchedule1 = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const classes = useStyles();

    const events = [
        {
            time: "6th",
            title: "Du lịch",
            address: "Sapa",
        },
        {
            time: "9th",
            title: "Team Building",
            address: "Công viên Hoà Bình",
        },
        {
            time: "12th",
            title: "HIT Open Day",
            address: "HaUI",
        },
        {
            time: "3th",
            title: "Team Building",
            address: "Ba Vì",
        },
    ];

    return (
        <section className="section" id="schedule1">
            <div className="container">
                <div className="max-w-500 mx-auto text-center">
                    <h1 className="mt-0 font-normal text-44">
                        Sự kiện thường niên
                    </h1>
                    <p className="mb-16">
                        Sự kiện thường niên của CLB nhằm mục đích giao lưu gắn
                        kết các khoá, trau dồi kiến thức giúp các nắm chắc hơn
                        kiến thức chuyên ngành.
                    </p>
                    <div className="inline-block mb-10">
                        <div
                            className={`flex flex-wrap items-center border-radius-8 ${classes.buttonGroupBG}`}
                        >
                            <div
                                className="px-6 py-2 cursor-pointer"
                                onClick={() => setTabIndex(0)}
                            >
                                Mùa Xuân
                            </div>
                            <div
                                className="px-6 py-2 cursor-pointer"
                                onClick={() => setTabIndex(1)}
                            >
                                Mùa Hè
                            </div>
                            <div
                                className="px-6 py-2 cursor-pointer"
                                onClick={() => setTabIndex(2)}
                            >
                                Mùa Thu
                            </div>
                            <div
                                className="px-6 py-2 cursor-pointer"
                                onClick={() => setTabIndex(2)}
                            >
                                Mùa Đông
                            </div>
                        </div>
                    </div>
                </div>

                {tabIndex === 0 && (
                    <Grid container spacing={2}>
                        {events.map((item, ind) => (
                            <Grid key={ind} item sm={6} xs={12}>
                                <div className={classes.evenetCard}>
                                    <div>
                                        <div className="p-2px inline-block rounded circle-holder">
                                            <div className="w-76 h-76 rounded bg-light-primary flex-column justify-center items-center text-primary">
                                                <h4 className="font-medium m-0">
                                                    {item.time}
                                                </h4>
                                                {/* <small>Oct</small> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="event-title m-0 text-primary font-normal">
                                            {item.title}
                                        </h4>
                                        <div className="mt-4 mb-8 relative">
                                            <Grid container spacing={0}>
                                                <Grid item xs={5}>
                                                    <span className="font-medium">
                                                        Địa điểm:
                                                    </span>
                                                </Grid>
                                                <Grid item xs={7}>
                                                    {item.address}
                                                </Grid>
                                                <Grid item xs={5}>
                                                    <span className="font-medium">
                                                        Thời gian:
                                                    </span>
                                                </Grid>
                                                <Grid item xs={7}>
                                                    {item.time}
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            className="rounded px-8 buy-ticket-button"
                                        >
                                            Tham gia
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </div>
        </section>
    );
};

export default EventSchedule1;
