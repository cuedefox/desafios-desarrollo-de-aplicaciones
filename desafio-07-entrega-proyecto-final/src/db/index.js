import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tasks.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, isCheck INTEGER NOT NULL, value TEXT NOT NULL)',
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const insertTask = ({ isCheck, value }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO tasks (isCheck, value) VALUES (?, ?)',
        [isCheck, value],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const updateTaskStatus = (taskId, isCheck) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE tasks SET isCheck = ? WHERE id = ?',
        [isCheck ? 1 : 0, taskId],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const fetchTasks = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tasks',
        [],
        (_, result) => {
          const tasks = [];
          for (let i = 0; i < result.rows.length; i++) {
            tasks.push(result.rows.item(i));
          }
          resolve(tasks);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const deleteTaskById = (taskId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM tasks WHERE id = ?',
        [taskId],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export default db;
