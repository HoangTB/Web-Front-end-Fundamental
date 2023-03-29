<!-- Bài 1 -->

BEGIN
    INPUT Math, Physics, Chemistri
        Averager= (Math + Physics + Chemistry)/3
    DISPLAY Average
END

<!-- Bài 2 -->

BEGIN
    INPUT num Dola
        Multiplication= num Dola* 23000
    DiSPLAY Multiplication
END

<!-- Bài 3 -->

BEGIN
    INPUT A , B , C
    A = MAX
    IF  A > B
        IF  A > C
            DISPLAY A
        ELSE C > A
            DISPLAY C
    ELSE B > C
            DISPLAY B
<!-- Bai 4 -->

BEGIN
    INPUT N A1...An
    A1=MAX, i=0
    WHILE i <= N 
        DO
            IF ai > MAX
                MAX= ai
            end if
                i=i+1
        END DO
    END WHILE
        DISPLAY MAX
END

<!-- Bai 5 -->

BEGIN 
    INPUT Point
    IF Point=>74
        DISPLAY A
    ELSE
        IF 60<=Point
            DISPLAY B
        ELSE
            IF 45<=Point
                DISPLAY C
            ELSE
                IF 35<=Point
                    DISPLAY D
                ELSE
                    DISPLAY E

END

<!-- Bai 10 -->

BEGIN
    INPUT YEAR
    
    IF YEAR %  4==0
            DISPLAY NAM NHUAN
        IF YEAR % 100==0
          AND IF YEAR % 400==0
                DISPLAY NAM NHUAN
              ELSE 
                DISPLAY NAM KO NHUAN

        ELSE 
          DISPLAY NAM NHUAN

    ELSE 
      DISPLAY NAM KO NHUAN
