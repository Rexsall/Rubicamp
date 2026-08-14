SELECT
    first_name,
    last_name,
    hire_date,
    CAST((julianday('2023-12-01') - julianday(hire_date)) / 365 AS INTEGER) AS years_worked
FROM employees
WHERE (julianday('2023-12-01') - julianday(hire_date)) / 365 > 2;