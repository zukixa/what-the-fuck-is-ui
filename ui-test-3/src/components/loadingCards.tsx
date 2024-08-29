import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface LoadingCardsProps {
  numberOfCards: number;
}

export const LoadingCards: React.FC<LoadingCardsProps> = ({ numberOfCards }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: numberOfCards }, (_, i) => (
        <Card key={i} className="flex flex-col w-[300px] md:w-[350px] lg:w-[400px] bg-gray-100 dark:bg-gray-800 animate-pulse">
          <CardHeader className="flex-grow space-y-2">
            <CardTitle className="flex items-center justify-between text-white">
              <div className="h-6 w-32 rounded-md bg-gray-200 dark:bg-gray-700" />
              <div className="h-6 w-16 rounded-md bg-gray-300 dark:bg-gray-600" />
            </CardTitle>
            <CardDescription className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
          </CardHeader>
          <CardContent className="text-white space-y-2">
            <div className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-3/4 rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-1/2 rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-8 w-24 mt-2 rounded-md bg-gray-300 dark:bg-gray-600" />
            <div className="h-8 w-32 mt-2 rounded-md bg-gray-300 dark:bg-gray-600" />
            <div className="h-8 w-40 mt-2 rounded-md bg-gray-300 dark:bg-gray-600" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LoadingCards;
