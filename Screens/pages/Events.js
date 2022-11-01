import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "../components/Header";
import NewsEvents from "../components/NewsEvents";


function Events(){
    const printButtonLabel = (item) => {
      console.log(item);
    }

    return(
        <>
        <StatusBar style={styles.container}/>
        <Header title = "最新活動 & 新聞"/>
        <NewsEvents 
          buttons={['最新活動','活動紀錄','新聞']}
          doSomethingAfterClick={printButtonLabel}
        />
      </>  
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFAF2",
    },
  });
  
export default Events;