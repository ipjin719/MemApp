import React from 'react';
import {
  View, ScrollView, Text, StyleSheet,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import Icon from './Icon';

export default function MemoList() {
  return (
    <ScrollView>
      <View style={styles.memListItem}>
        <View>
          <Text style={styles.memListItemTitle}>買い物リスト</Text>
          <Text style={styles.memListItemDate}>2022年1月24日 22:06</Text>
        </View>
        <View>
          <Icon name="delete" size={16} color="#B0B0B0" />
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>

      <View style={styles.memListItem}>
        <View>
          <Text style={styles.memListItemTitle}>買い物リスト</Text>
          <Text style={styles.memListItemDate}>2022年1月24日 22:06</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>

      <View style={styles.memListItem}>
        <View>
          <Text style={styles.memListItemTitle}>買い物リスト</Text>
          <Text style={styles.memListItemDate}>2022年1月24日 22:06</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#B0B0B0" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  memListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});