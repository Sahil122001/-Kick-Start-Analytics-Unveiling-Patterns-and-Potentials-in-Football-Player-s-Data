# -Kick-Start-Analytics-Unveiling-Patterns-and-Potentials-in-Football-Player-s-Data:



# Dynamic Player Rating Prediction

This repository contains the code and resources for predicting player ratings dynamically using a linear regression model. The project includes a Jupyter notebook for model development, a Python script for integration, and a web interface for user interaction.

## Files and Directories

### Jupyter Notebooks
- **Dynamic_Player_Rating_Prediction.ipynb**: Notebook containing the code and steps to build and evaluate the player rating prediction model.
- **minor_Project_ml (1).ipynb**: Additional notebook for minor project related to machine learning, potentially containing exploratory data analysis or alternative models.

### Datasets
- **fifa_cleaned (1).csv**: Cleaned dataset used for training and testing the player rating prediction model.

### Saved Models
- **linear_regression_model.sav**: Trained linear regression model for predicting player ratings.

### Web Interface
- **index.html**: HTML file for the web interface to interact with the prediction model.
- **styles.css**: CSS file for styling the web interface.
- **prediction.js**: JavaScript file for handling interactions and making predictions via the web interface.

### Python Script
- **app.py**: Python script for integrating the model and setting up a web server to serve the web interface and handle prediction requests.

## Usage

### Running Jupyter Notebooks
To explore and run the model development process, open the Jupyter notebooks in a Jupyter environment:
1. Clone the repository:
    ```bash
    git clone https://github.com/Sahil122001/dynamic-player-rating-prediction.git
    cd dynamic-player-rating-prediction
    ```
2. Launch Jupyter Notebook:
    ```bash
    jupyter notebook
    ```
3. Open the desired notebook (e.g., `Dynamic_Player_Rating_Prediction.ipynb`) and run the cells.

### Running the Web Application
The `app.py` script sets up a web server to serve the web interface and handle prediction requests. Make sure you have the required dependencies installed:
```bash
pip install -r requirements.txt
```
Run the script:
```bash
python app.py
```
Open a web browser and navigate to `http://localhost:5000` to interact with the prediction model.

## Requirements
- Python 3.x
- Jupyter Notebook
- Libraries listed in `requirements.txt` (not included in the description but should contain necessary libraries such as `pandas`, `numpy`, `scikit-learn`, `flask`, etc.)

## License
This project is licensed under the MIT License.

## Author
Sahil122001

