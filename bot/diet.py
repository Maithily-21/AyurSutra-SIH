import os
import pandas as pd
from logger import logger

current_dir = os.path.dirname(os.path.realpath(__file__))
csv_path = os.path.join(current_dir, "dataset", "diet.csv")

df = pd.read_csv(csv_path)



def recommend_Diet(prakriti: str) -> list[str]:
    try:
        recommends = (
            df.loc[df["Doshas"] == prakriti]
            .drop("Doshas", axis=1)
            .to_numpy()
            .tolist()[0]
        )
        recommends[0] = f"<b>To Consume : </b>{recommends[0]}"
        recommends[1] = f"<b>To Avoid : </b>{recommends[1]}"
        return recommends
    except IndexError as ie:
        logger.error(f"Rather than Prakrit given {ie}")
