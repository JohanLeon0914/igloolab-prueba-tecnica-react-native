import React, { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import axios from "axios";
import { API_URL } from "@/const/api_url";
const AddProductScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    if (!name || !description || !price || !image) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    const newProduct = {
      name: name,
      description: description,
      price: parseFloat(price),
      image: image,
    };
    await axios.post(`${API_URL}/products`, newProduct);
    Alert.alert("Producto agregado correctamente");
  };

  return (
    <View>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} />
      <TextInput
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="URL de la imagen"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Guardar" onPress={handleSubmit} />
    </View>
  );
};

export default AddProductScreen;
