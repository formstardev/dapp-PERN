import React, { useState } from 'react';
import { Picker } from 'emoji-mart';


const EmoticonInput = ({showPicker}) => {
  const [text, setText] = useState('');

  const handleEmoticonClick = (emoji) => {
    setText(text + emoji.native);
  };

  return (
    <div className='w-full'>
      <input
        type="text"
        placeholder="Add comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="rounded-lg bg-[#8D969D] bg-opacity-20 w-full h-[37px] text-white mx-0 px-3"
        
      />
      {showPicker && (
        <Picker
          onSelect={handleEmoticonClick}
          emojiTooltip={true}
          title="Pick your emoticon"
          emoji="point_up"
        />
      )}
    </div>
  );
};

export default EmoticonInput;
