import React from 'react';
import classes from './Activity.module.scss'
import check from "../../../images/check.svg";

const ActivityItem = (props) => {
    return (
        <div className={classes.activity__row}>
            <div className={[classes.activity__item, classes.activity__item_time].join(' ')}><span
                className={classes.activity__item}>{props.time}</span> second ago
            </div>
            <div className={[classes.activity__item, classes.activity__item_wallet].join(' ')}>0x3123132f14142..</div>
            <div className={[classes.activity__item, classes.activity__item_amount].join(' ')}>{props.amount}</div>
            <div className={[classes.activity__item, classes.activity__item_status].join(' ')}>
                <div className={classes.activity__icon}>
                    <img src={check} alt="check" />
                </div>
            </div>
        </div>
    );
};

export default ActivityItem;