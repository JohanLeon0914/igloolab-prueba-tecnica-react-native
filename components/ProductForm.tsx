import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

interface ProductFormProps {
  initialData?: {
    name: string;
    description: string;
    price: string;
    image: string;
  };
  onSubmit: (product: {
    name: string;
    description: string;
    price: number;
    image: string;
  }) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [price, setPrice] = useState(initialData?.price || '');
  const [image, setImage] = useState(initialData?.image || '');

  const handleSubmit = () => {
    if (!name || !description || !price || !image) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    onSubmit({
      name,
      description,
      price: parseFloat(price),
      image,
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
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

export default ProductForm;