import { StyleSheet, Text, View } from 'react-native';
import React, { version } from 'react';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>MemApp</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>

      <View>
        <View style={styles.memListItem}>
          <View>
            <Text style={styles.memListItemTitle}>買い物リスト</Text>
            <Text style={styles.memListItemDate}>2022年1月24日 22:06</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memListItem}>
          <View>
            <Text style={styles.memListItemTitle}>買い物リスト</Text>
            <Text style={styles.memListItemDate}>2022年1月24日 22:06</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memListItem}>
          <View>
            <Text style={styles.memListItemTitle}>買い物リスト</Text>
            <Text style={styles.memListItemDate}>2022年1月24日 22:06</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    color: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    right: 19,
    bottom: 16,
  },
  appbarTitle: {
    color: '#ffffff',
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
  },
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
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
