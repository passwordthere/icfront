import numpy as np


def EE():
    # Constants based on visual inspection of the graph
    baseline_ee = 80  # Baseline energy expenditure
    exercise_ee = 150  # Estimated energy expenditure during exercise
    sleep_ee = 50     # Estimated energy expenditure during sleep
    total_time = 24 * 60  # Total time in minutes for a 24h period

    # Time points for exercise and sleep based on the graph (in minutes)
    exercise_start = 13 * 60
    exercise_end = 17 * 60
    sleep_start = 23 * 60
    sleep_end = 7 * 60

    # Generate the time series for 24 hours with a 2-minute interval
    time_series = np.arange(0, total_time, 2)

    # Initialize EE array with baseline energy expenditure as float type
    ee_series = np.full(time_series.shape, baseline_ee, dtype=float)

    # Apply the higher energy expenditure during the exercise period
    exercise_indices = (time_series >= exercise_start) & (time_series <= exercise_end)
    ee_series[exercise_indices] = exercise_ee

    # Apply the lower energy expenditure during the sleep period
    # Since sleep period crosses midnight, we handle it in two parts
    sleep_indices_1 = (time_series >= sleep_start)
    sleep_indices_2 = (time_series <= sleep_end)
    ee_series[sleep_indices_1] = sleep_ee
    ee_series[sleep_indices_2] = sleep_ee

    # Adding random noise to the data
    np.random.seed(0)  # For reproducibility
    noise = np.random.normal(0, 5, ee_series.shape)  # Noise with a small standard deviation
    ee_series += noise

    # Ensure that EE does not go negative after adding noise
    ee_series = np.clip(ee_series, 0, None)

    # Convert the energy expenditure to kilojoules for the 24-hour period (W to kJ)
    ee_kj = ee_series * 2 * 60 / 1000

    # Compute the total energy expenditure for the day
    total_ee_kj = np.sum(ee_kj)

    # Print total EE in kJ and output the first 20 values as a sample
    total_ee_kj, ee_series[:20].tolist()

    print(len(list(ee_series)))


def RQ():
    min_tidal_volume = 0.6  # Minimum volume of a breath
    max_tidal_volume = 1.0  # Maximum volume of a breath
    num_breaths = 50  # Number of breaths to simulate

    tidal_volumes = np.random.uniform(min_tidal_volume, max_tidal_volume, num_breaths)

    RQ = tidal_volumes.tolist()
    print(list(RQ))
    print(len(RQ))


RQ()