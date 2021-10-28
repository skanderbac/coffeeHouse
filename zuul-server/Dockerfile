FROM openjdk:15
EXPOSE 8762
ADD /target/gateway-0.0.1-SNAPSHOT.war gateway-0.0.1-SNAPSHOT.war
ENTRYPOINT ["java", "-jar", "gateway-0.0.1-SNAPSHOT.war"]