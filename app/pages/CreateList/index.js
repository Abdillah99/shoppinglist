import React,{ 
	useState, 
	useCallback, 
	useRef 
} from 'react';
import {
	View,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';

import Modal from 'react-native-modal';

import { FormAddList }  from '@components/Form/AddList';
import { CardInfo } from '@components/Form/CardInfo';
import ListItem from '@components/Card/ListItem';

import styles from './style';
import { useListAction } from '@modules/context/List';

const CreateList = (props) =>{
	const [modalState, setModal] = useState({showed:false,type:'title'});
	const [items, setItem] = useState([]);
	const [cardInfo, setCardInfo] = useState({title:null,tags:null,});
	const [completedList, setCompletedList] = useState(new Map());
	
	const detailRef = useRef({markDone:[]})
	
	const action = useListAction();

	const markAsDone = useCallback(
		id=>{
			const newSelected = new Map(completedList);
			newSelected.set(id, !completedList.get(id));
			setCompletedList(newSelected)
		},[completedList]
	)

	const addItem = (data) =>{
		setItem(prevstate=>[...prevstate,data]);
	}

	const editItem = (id) =>{
		
	}

	const deleteItem = (id) =>{
		const filteredData = items.filter(item => item.id !== id);
		setItem(filteredData);
	}
	
	const setCard = (data) =>{
		setCardInfo(prevstate=>{
			return{
				...prevstate,
				...data,
			}
		});
	}

	const saveCard = async () =>{
		const cardData = {
			...cardInfo,
			dateCreated: new Date(),
			task: items.length,
			completed: 0,
			items:items,
		}

		action.addCard(cardData).then( () =>{
			props.navigation.goBack();

		});
	}

	const updateCard = () =>{
		
	}

/**
 *  ============================
 *  COMPONENT UI LOGIC 
 *   component ui movement related function 
 * 	 writed after this comment
 *  ===========================
 */
	const showModal = ( modalType ) =>{
		requestAnimationFrame(()=>{
			setModal(prevstate=>{
				return{
					showed:!prevstate.showed,
					type:modalType,
				}
			});
		})
	}	

	const toggleForm = ()=>{
		showModal('form');
	}

	const toggleTitle = () =>{
		showModal('title');
	}
	
	const closeModal = ()=>{
		setModal(prevstate=>{
			return {showed:false,type:prevstate}
		});
	}

	const _renderItem = ({ item }) => {
		return (
			<ListItem
				data={item}
				onEdit={editItem}
				onDelete={deleteItem}
				onPress={markAsDone}
				isDone={completedList.get(item.id)}
			/>
		);
	}

	return(	
	<KeyboardAvoidingView style={styles.container} >
		<View style={styles.headerContainer}>
			<TouchableOpacity onPress={()=>props.navigation.goBack()}>
				<Image 
					source={require('@assets/icon/close.png')}
					style={{width:16,height:16,}}
				/>
			</TouchableOpacity>
			<TouchableOpacity onPress={saveCard}>
				<Text>Save</Text>
			</TouchableOpacity>
		</View>
		<View style={styles.titleContainer}>
			<Text style={styles.titleText}>{cardInfo.title ? cardInfo.title : "Enter the ttitle"}</Text>
			<TouchableOpacity style={styles.settingButton} onPress={toggleTitle}>
				<Image source={require('@assets/icon/setting.png')} style={{ width: 16, height: 16 }} />
			</TouchableOpacity>
		</View>
		<View style={styles.listContainer}>
			<FlatList
				data={items}
				extraData={items}
				keyExtractor={(item, index) => index.toString()}
				renderItem={_renderItem} 
			/>
		</View>
		<TouchableOpacity style={styles.overlayButton} onPress={toggleForm}>
			<Image source={require('@assets/icon/plus.png')} style={styles.buttonIcon} />
		</TouchableOpacity>
		<Modal
			animationIn='slideInUp'
			isVisible={modalState.showed}
			backdropColor='transparant'
			style={{ margin: 0, justifyContent: 'flex-end', }}
			onBackdropPress={closeModal}
			onRequestClose={closeModal}
			useNativeDriver={true}
			>
			{
				modalState.type == 'title' ?

					<CardInfo
						data={cardInfo}
						onEditTitle={setCard}
						onEditTags={setCard}
						onClose={closeModal}
					/>
					:
					<FormAddList 
						onAddItem={addItem} 
					/>
			}
		</Modal>
	</KeyboardAvoidingView>
	)

}
export default CreateList;
