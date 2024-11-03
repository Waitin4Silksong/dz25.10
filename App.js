import React, { useState } from "react"; 
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MobileMenu = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (menuItem) => {
    setActiveModal(menuItem);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setActiveModal(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => openModal("Home")}>
          <Icon name="home" size={30} color="#4caf50" style={styles.icon} />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => openModal("Profile")}>
          <Icon name="user" size={30} color="#4caf50" style={styles.icon} />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => openModal("Settings")}>
          <Icon name="cog" size={30} color="#4caf50" style={styles.icon} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => openModal("About")}>
          <Icon name="info-circle" size={30} color="#4caf50" style={styles.icon} />
          <Text style={styles.menuText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => openModal("Contact")}>
          <Icon name="phone" size={30} color="#4caf50" style={styles.icon} />
          <Text style={styles.menuText}>Contact</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              {activeModal === "Home" && "This is the Home section"}
              {activeModal === "Profile" && "Name: Yurii"}
              {activeModal === "Settings" && "This is the Settings section"}
              {activeModal === "About" && "Created in 2024"}
              {activeModal === "Contact" && "yurii.work.if@gmail.com"}
            </Text>
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#ffffff",
    borderRadius: 15,
  },
  menuItem: {
    alignItems: "center",
    padding: 10,
    width: 80,
  },
  icon: {
    marginBottom: 5,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  modalText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#4caf50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MobileMenu;

