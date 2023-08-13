import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { addImageToAlbum } from '@/lib/actions/addtoalbum.actions';
import { SearchResult } from '@/types';
import { FolderPlus } from 'lucide-react';
import { useState } from 'react';

type Props = {
  image: SearchResult;
  onClose: () => void;
};

const AddToAlbum = ({ image, onClose }: Props) => {
  const [albumName, setAlbumName] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={newOpenState => {
        setOpen(newOpenState);
        if (!newOpenState) {
          onClose();
        }
      }}
    >
      <DialogTrigger>
        <Button variant='ghost'>
          <FolderPlus className='mr-2 h-4 w-4' />
          <span>Add to Album</span>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>
            Type an album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='album-name' className='text-right'>
              Album
            </Label>
            <Input
              onChange={e => setAlbumName(e.currentTarget.value)}
              id='album-name'
              value={albumName}
              className='col-span-3'
              name='album-name'
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              onClose();
              setOpen(false);
              await addImageToAlbum(image, albumName);
            }}
            type='submit'
          >
            Add to Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddToAlbum;
