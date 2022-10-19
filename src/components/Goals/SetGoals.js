import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Button from '../Button';
import {
  ButtonColor,
} from '../../../assets/colors/colors';
import SetGoalModaal from '../Modaal/SetGoalModaal';

const SetGoals = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        <View style={styles.GoalView}>
          <Text style={styles.GoalText}>Goals</Text>
          <Text style={styles.SetGoalText}>Let set your goals</Text>
        </View>
        <View style={styles.setNewGoal}>
          {/* <AntDesign name='plus' size={10}
             /> */}

          <Button
            title="Set A New Goal"
            buttonStyle={styles.button}
            onPress={() => setVisible(true)}
          />
        </View>
      </View>
      <SetGoalModaal modalVisible={visible} setModalVisible={setVisible} />
    </View>
  );
};

export default SetGoals;

const styles = StyleSheet.create({
  mainView: {
    marginTop: verticalScale(30),
  },

  GoalText: {
    color: 'black',
    fontSize: moderateScale(30),
    fontWeight: '900',
    fontSize: moderateScale(35),
  },
  SetGoalText: {
    color: 'black',
  },
  GoalView: {
    // marginHorizontal:scale(20),
  },
  button: {
    width: '100%',
    paddingHorizontal: scale(10),
    backgroundColor: ButtonColor,
    borderRadius: moderateScale(30),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(20),
  },
  setNewGoal: {
    flexDirection: 'row',
  },
});
