CREATE TABLE companies(
    company_id CHARACTER(3) PRIMARY KEY NOT NULL,
    company_name VARCHAR(100) NOT NULL
);

INSERT INTO companies(company_id, company_name) VALUES ('C01', 'PT. Makmur jaya');

CREATe TABLE employess(
    nip CHARACTER(3) PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    address TEXT, 
    company_id CHARACTER(3) NOT NULL,
    FOREIGN KEY(company_id) REFERENCES companies(company_id) 
);

INSERT INTO employess(nip, name, address, company_id) VALUES
('001', 'Dika', 'jl cipadung', 'C01'),
('002', 'Ariq', 'jl bebas', 'C01'),
('003', 'Rexsal', 'jl cinambo', 'C01');

CREATE TABLE projects (
    project_id CHARACTER(3) PRIMARY KEY NOT NULL,
    project_name VARCHAR(100) NOT NULL
);

INSERT INTO project VALUES ('P01', 'EScommerse App'), ('P02', 'Ojek App');

CREATE TABLE assigns (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nip CHARACTER(3) NOT NULL,
    project_id CHARACTER(3) NOT NULL,
    spent_time INT 
    FOREIGN KEY(nip) REFERENCES employees(nip) 
    FOREIGN KEY(project_id) REFERENCES projects(project_id) 
);

INSERT INTO assigns (nip, project_id) VALUES
('P01', 'P01'),
('P02', 'P01'),
('P01', 'P02');