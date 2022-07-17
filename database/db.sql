

CREATE TABLE IF NOT EXISTS USERS (email TEXT NOT NULL PRIMARY KEY, password TEXT, username TEXT);

CREATE TABLE IF NOT EXISTS HOMES (home_id SERIAL PRIMARY KEY, home_name TEXT);

CREATE TABLE IF NOT EXISTS RUH (email TEXT, home_id INT,

    CONSTRAINT fk_email  
    FOREIGN KEY(email)   
    REFERENCES USERS(email), 
    
    CONSTRAINT fk_home_id  
    FOREIGN KEY (home_id)   
    REFERENCES HOMES(home_id)

);


CREATE TABLE IF NOT EXISTS HOME_COMPONENTS (home_id INT NOT NULL, component TEXT NOT NULL, state boolean, 
    PRIMARY KEY (home_id, component),
    
    CONSTRAINT fk_home_id  
    FOREIGN KEY (home_id)   
    REFERENCES HOMES(home_id)

)