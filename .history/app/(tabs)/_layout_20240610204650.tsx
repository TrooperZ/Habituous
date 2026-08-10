import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false,
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'home'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'calendar'} color={color} />
          ),
        }}
      />
            <Tabs.Screen
        name="charts"
        options={{
          title: 'Chart',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'bar-chart'} color={color} />
          ),
        }}
      />
                  <Tabs.Screen
        name="people"
        options={{
          title: 'Friends',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'people'} color={color} />
          ),
        }}
      />
                        <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'person'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
