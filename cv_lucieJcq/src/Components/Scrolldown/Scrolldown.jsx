import style from "./scrolldown.module.scss";

export const ScrollDown = () => {
    return (
        <div className={style.scrolldownWrapper}>
            <div className={style.scrolldown}>
                <svg height="30" width="10">
                    <circle
                        className={style.scrolldownP1}
                        cx="5"
                        cy="15"
                        r="2"
                    />
                    <circle
                        className={style.scrolldownP2}
                        cx="5"
                        cy="15"
                        r="2"
                    />
                </svg>
            </div>
        </div>
    );
};
