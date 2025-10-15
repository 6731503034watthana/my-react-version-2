# ===== build stage (มี Maven) =====
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /workspace
COPY pom.xml .
# โหลด dependency ล่วงหน้าให้ cache ได้
RUN mvn -q -DskipTests dependency:go-offline
COPY src ./src
RUN mvn -q -DskipTests package

# ===== run stage (เบา) =====
FROM eclipse-temurin:17-jre AS run
WORKDIR /app
# ไม่ต้องเดาชื่อไฟล์ jar ให้ก็อปที่ build มาเป็น app.jar เลย
COPY --from=build /workspace/target/*.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]
