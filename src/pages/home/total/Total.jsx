import React from 'react';
import classes from "./Total.module.scss";


const Total = () => {
    return (
        <div className={[classes.total, classes.outer].join(' ')}>
            <div className={[classes.total__container, classes.container].join(' ')}>
                <div className={classes.total__col}>
                    <span className={classes.total__col_display}>Total</span> staked: <span
                    className={classes.gradient__text}>3.6b</span>
                </div>
                <div className={classes.total__col}>
                    <span className={classes.total__col_display}>Total</span>
                    paid: <span className={classes.gradient__text}>1.7b</span>
                </div>
                <div className={classes.total__col}>
                    <span className={classes.total__col_display}>Total</span> members: <span
                    className={classes.gradient__text}>17.3k</span>
                </div>
            </div>
        </div>
    );
};

export default Total;