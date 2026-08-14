SELECT
    first_name,
    last_name,
    hire_date,
    CAST(strftime('%Y', '2023-12-01') AS INTEGER)
    - CAST(strftime('%Y', hire_date) AS INTEGER) AS years_worked
FROM employees
WHERE
    CAST(strftime('%Y', '2023-12-01') AS INTEGER)
    - CAST(strftime('%Y', hire_date) AS INTEGER) >= 2;