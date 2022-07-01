import React, {useEffect, useState} from 'react';
import classes from './Activity.module.scss'
import ActivityItem from "./ActivityItem";
import activityItem from "./ActivityItem";

const Activity = () => {

    const [activityList, setList] = useState([
        {id: 1, time: 8, amount: '364.1m'},
        {id: 2, time: 16, amount: '763.2m'},
        {id: 3, time: 24, amount: '520.7m'},
        {id: 4, time: 30, amount: '100.3m'},
        {id: 5, time: 37, amount: '901.0m'},
    ]);

    // Настройка
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomTime = getRandomNumber(5, 10) * 1000;  // время между вставками в миллисекундах

    const fun = () => {
        let time = getRandomNumber(5, 10);
        let amount = Number(getRandomNumber(100, 999)).toFixed(1) + "m";
        setList(() => {
            return  activityList.map(item => item.id === 1 ? {id: 1, time: time, amount: amount} : item);
        })
    }

    useEffect(() => {
        const timer = setInterval(fun, 5000);
        return () => clearInterval(timer)
    })

    return (
        <section className={classes.activity}>
            <div className={classes.activity__headers}>
                <div className={[classes.activity__section__title, classes.section__itle].join(' ')}>
                    Activity
                </div>
                <span className={[classes.activity__live, classes.live].join(' ')}><span className={classes.live__status}></span>Live</span>
            </div>

            <div className={[classes.activity__container, classes.container].join(' ')}>

                <div className={classes.activity__body}>
                    <div className={classes.activity__header}>
                        <div className={[classes.activity__item, classes.activity__item_time].join(' ')}>Time</div>
                        <div className={[classes.activity__item, classes.activity__item_wallet].join(' ')}>Wallet</div>
                        <div className={[classes.activity__item, classes.activity__item_amount].join(' ')}>Amount</div>
                        <div className={[classes.activity__item, classes.activity__item_status].join(' ')}>Status</div>
                    </div>
                    {activityList.map(item =>
                        <ActivityItem key={item.time} amount={item.amount} time={item.time}/>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Activity;