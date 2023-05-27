import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const ReportesPDF = ({ data }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#ffffff",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    header: {
      fontSize: 18,
      marginBottom: 10,
    },
    table: {
      display: "table",
      width: "auto",
      marginVertical: 10,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCell: {
      borderWidth: 1,
      borderColor: "#000000",
      padding: 5,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Reporte de Asesorías</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.tableHeaderCell}>Docente</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableHeaderCell}>Materia</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableHeaderCell}>Asunto</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableHeaderCell}>Estudiante</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableHeaderCell}>Fecha y hora</Text>
              </View>
            </View>
            {data.map((item) => (
              <View style={styles.tableRow} key={item.id}>
                <View style={styles.tableCell}>
                  <Text>
                    {item.teacher.name} {item.teacher.lastname}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{item.materia}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{item.description}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>
                    {item.student.name} {item.student.lastname}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text>{item.date}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ReportesPDF;