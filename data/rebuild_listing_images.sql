TRUNCATE TABLE listing_image;

SET @img1 = '1.jpg';
SET @img2 = '2.jpg';
SET @img3 = '3.jpg';
SET @img4 = '4.jpg';
SET @img5 = '5.jpg';
SET @img6 = '6.jpg';
SET @placeholder = 'placeholderTE.png';

INSERT INTO listing_image (listing_id, path)
SELECT t.id,
       CASE rn
         WHEN 1 THEN @img1
         WHEN 2 THEN @img2
         WHEN 3 THEN @img3
         WHEN 4 THEN @img4
         WHEN 5 THEN @img5
         WHEN 6 THEN @img6
         ELSE @placeholder
       END AS path
FROM (
    SELECT l.*,
           ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY id) AS rn
    FROM listing l
) AS t
ORDER BY t.id;
