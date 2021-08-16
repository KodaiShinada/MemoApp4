import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScrren() {
  return (
    <View>
      <AppBar />
      <View>
        <Text>買い物リスト</Text>
        <Text>2021/08/16/ 4:00</Text>
      </View>
      <View>
        <ScrollView>
          <Text>
            サンプルテキスト
            買うもの
            １
            ２
            ３
          </Text>
        </ScrollView>
      </View>
      <CircleButton>+</CircleButton>
    </View>
  )
}
