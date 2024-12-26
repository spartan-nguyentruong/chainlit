import { TextElement } from '@/components/Elements/Text';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ITextElement } from '@chainlit/react-client';


interface Props {
  items: ITextElement[];
}

const InlinedTextList = ({ items }: Props) => (
  <div className='flex flex-col gap-2'>
    {items.map((el, i) => {
      return (
        <Card>
                          <CardHeader>
                    <CardTitle>{el.name}</CardTitle>
                </CardHeader>
            <CardContent>
            <TextElement element={el} />
            </CardContent>
        </Card>
      );
    })}
  </div>
);

export { InlinedTextList };
