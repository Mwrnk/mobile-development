import React, { useState } from 'react';
import { ItemService } from '../services/ItemService';
import { Item } from '../models/Item';
import { ItemView } from '../views/ItemView';
import { ItemModal } from '../components/ItemModal';
import { ConfirmRemoveModal } from '../components/ConfirmRemove';

export function ItemController() {
  const [items, setItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const [removeModalVisible, setRemoveModalVisible] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<Item | undefined>(undefined);

  const openAddModal = () => {
    setNome('');
    setDescricao('');
    setModalVisible(true);
  };

  const closeAddModal = () => {
    setModalVisible(false);
  };

  const handleSave = () => {
    if (!nome || !descricao) {
      alert('Por favor, preencha os campos.');
      return;
    }
  };

  ItemService.addItem(nome, descricao);
  setItems(ItemService.getItems());
  setModalVisible(false);
}
