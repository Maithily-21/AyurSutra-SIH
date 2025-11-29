

This project introduces a machine-learning–based chatbot that simplifies the process by asking users a series of thoughtful questions about their physical and mental traits. Through this interactive conversation, the chatbot provides a consistent and objective Prakriti evaluation and, based on the results, offers personalized diet recommendations.


## Installation Guide

### Frontend Installation 🖼️

1. Make sure you have installed **Nodejs** in your system.

2. Navigate to `frontend` folder.

```
cd frontend
```

3. Install the packages.

```
npm i
```

4. After Installing all the packages make some changes in `.env` file which is located in `frontend` folder.

```
VITE_API=ws://127.0.0.1:8000
```

Paste your copied url or server url in place of `127.0.0.1:8000`

5. Run the Frontend.

```
npm run dev
```

### ChatBot 💻 Installation & Training Guide

1. Make Sure you have installed the **Python** and version should be **>=3.10**.

2. Navigate to the bot Folder using command

   ```
   cd bot
   ```

then create the `Models` Folder inside it

```
mkdir Models
```

3. Create Virtual Environment using virtualenv or any package you need here I'm preferring `virtualenv`

   1. Install the `virtualenv` package using pip

      ```
      pip install virtualenv
      ```

   2. Create the Virtual Environment

      ```
      virtualenv project
      ```

   3. Activate the Virtual Environment.

      For windows :

      ```
      project/Scripts/activate
      ```

4. Before installing packages, first download the `GTK Runtime` in your system. These Runtime Environment will help you to create the PDF from the HTML also the backend of the package `weasyprint`

   Download the Runtime Environment for Windows from Here [GTK Runtime](https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer/releases)

   Other Operating System refer to the Installation process of the `weasyprint` package [Read here](https://doc.courtbouillon.org/weasyprint/stable/first_steps.html)

5. Install the packages required to run the project.

   ```
   pip install tensorflow pandas nltk scikit-learn sqlalchemy fastapi uvicorn websockets weasyprint
   ```

**Note :** Wait for the packages to be installed if you encountered any error or problems try to install the packages one by one.

6. Train the Chatbot Model on the same terminal. Make sure you are in the bot folder in terminal.

   For Windows:

   ```
   python Training/botmodel.py
   ```



7. Train the Prakriti Model on the same Terminal.

   For Windows:

   ```
   python Training/prakritimodel.py
   ```


8. Run the API to serve both trained Model to connect with the Frontend.

   For Windows:

   ```
   python app.py
   ```



9. Wait for the API to startup then copy the url in which the api is running.

   e.g: `https://127.0.0.1:8000` only copy part from `127.0.0.1:8000`






You have successfully setup your project.


