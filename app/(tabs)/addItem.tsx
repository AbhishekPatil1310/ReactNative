import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function AddItemsScreen() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    if (text.trim() === "") return;
    setItems([...items, text]);
    setText("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Add Items to List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={text}
        onChangeText={setText}
      />

      <Button title="Add" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Text style={styles.item}>{index + 1}. {item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#aaa", borderRadius: 5, padding: 10, marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 5, backgroundColor: "#f2f2f2", padding: 8, borderRadius: 5 },
});
