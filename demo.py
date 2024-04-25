# Define constants and parameters
import numpy as np
import pandas as pd


room_volume = 25  # Liters
flow_rate = 200  # Liters per minute
recording_interval = 2  # seconds
total_duration = 40 * 60  # 40 minutes in seconds
n_samples = total_duration // recording_interval  # Number of data points

# Exercise intensities in Watts for each 10-minute period
intensities = [25, 50, 100, 200]

# Calculate the number of samples in each exercise period
samples_per_period = (10 * 60) // recording_interval

# Function to generate simulated concentrations
def generate_concentrations(base, noise_scale):
    return np.round(base + np.random.normal(scale=noise_scale, size=n_samples), 3)

# Generate data for oxygen and CO2 concentrations at both inlet and outlet
# Initial concentrations
oxygen_base_inlet = 0.21  # 21% oxygen concentration at the inlet
co2_base_inlet = 0.0004  # 400 ppm CO2 at the inlet, which is 0.0004 in fraction

# Assuming some depletion and production rates (these are arbitrary for the simulation)
oxygen_depletion_rate = np.repeat([0.0001, 0.0002, 0.0004, 0.0008], samples_per_period)
co2_production_rate = np.repeat([0.0001, 0.0002, 0.0004, 0.0008], samples_per_period)

# Simulate data
oxygen_inlet = generate_concentrations(oxygen_base_inlet - np.cumsum(oxygen_depletion_rate), 0.001)
oxygen_outlet = generate_concentrations(oxygen_inlet - 0.01, 0.001)  # Small change at outlet

co2_inlet = generate_concentrations(co2_base_inlet + np.cumsum(co2_production_rate), 0.00001)
co2_outlet = generate_concentrations(co2_inlet + 0.01, 0.00001)  # Increase at outlet

# Revised simulation considering constant air flow and exercise-induced changes

# Function to simulate concentration changes with ventilation
def simulate_with_ventilation(base, production_rate, clearance_rate, samples_per_period):
    concentration = [base]
    for period in range(4):
        for _ in range(samples_per_period):
            current = concentration[-1] + production_rate[period] - clearance_rate
            concentration.append(max(current, base))  # Ensure concentration doesn't fall below base
    return np.round(concentration[1:], 3)

# Base concentrations and rates
oxygen_base = 0.21
co2_base = 0.0004

# Compute clearance rates based on flow rate and room volume (converted to consistent units)
clearance_oxygen = flow_rate / (room_volume * 60) * oxygen_base  # per 2 seconds
clearance_co2 = flow_rate / (room_volume * 60) * co2_base  # per 2 seconds

# Reusing the production and depletion rates for simplicity
oxygen_concentration_inlet = simulate_with_ventilation(oxygen_base, -oxygen_depletion_rate, clearance_oxygen, samples_per_period)
oxygen_concentration_outlet = simulate_with_ventilation(oxygen_base - 0.005, -oxygen_depletion_rate, clearance_oxygen, samples_per_period)
co2_concentration_inlet = simulate_with_ventilation(co2_base, co2_production_rate, clearance_co2, samples_per_period)
co2_concentration_outlet = simulate_with_ventilation(co2_base + 0.0001, co2_production_rate, clearance_co2, samples_per_period)

# 假设这些列表已经被定义并包含数据
oxygen_inlet_data = oxygen_inlet.tolist()
oxygen_outlet_data = oxygen_outlet.tolist()
co2_inlet_data = co2_inlet.tolist()
co2_outlet_data = co2_outlet.tolist()

# 创建一个字典，其中键是CSV文件中的列名
data = {
    'Oxygen Inlet': oxygen_inlet_data,
    'Oxygen Outlet': oxygen_outlet_data,
    'CO2 Inlet': co2_inlet_data,
    'CO2 Outlet': co2_outlet_data
}

print(oxygen_inlet_data[:50])
print(oxygen_outlet_data[:50])
print(co2_inlet_data[:50])
print(co2_outlet_data[:50])

# 创建一个DataFrame
df = pd.DataFrame(data)

# 导出到CSV文件
df.to_csv('output_data.csv', index=False)