// Is seventh block rotated already
let seventhRotated = false;

// Define the blocks that will be rendered
const blocks = [
  {
    color: 'black',
    onClick: () => {
      // Grab secondth block and set the colorTransition class on it, with a bg color of purple
      const secondBlockDiv = document.getElementById('block-2')

      secondBlockDiv.classList.add('colorTransition')
      secondBlockDiv.style.backgroundColor = 'gray'
    }
  },
  {
    color: 'crimson',
    onClick: () => {
      // Grab middle (fifth) block and rotate it 45 degrees
      const middleBlockDiv = document.getElementById('block-5')

      middleBlockDiv.classList.add('slightlyRotated')
    }
  },
  {
    color: 'red',
    onHover: () => {
      // Grab last (ninth) block and slowly make it bigger
      const lastBlockDiv = document.getElementById('block-9')

      lastBlockDiv.classList.add('growingBlock')
    }
  },
  {
    color: 'springgreen',
    onClick: () => {
      // Override margin/gap of the grid to be 10px
      const blocksContainer = document.getElementById('blocksContainer')

      blocksContainer.style.gridGap = '10px'
    }
  },
  {
    color: 'lime',
    onClick: () => {
      // Grab eighth block and rotate it 360 degrees
      const eighthBlockDiv = document.getElementById('block-8')

      eighthBlockDiv.classList.add('fullyRotated')
    }
  },
  {
    color: 'lawngreen',
    onClick: () => {
      // Grab seventh block and rotate it 90 degrees right, and back if already rotated
      const seventhBlockDiv = document.getElementById('block-7')

      if (!seventhRotated) {
        seventhRotated = true

        seventhBlockDiv.style.transition = 'transform 2s'
        seventhBlockDiv.style.transform  = 'rotate(90deg)'
        return
      }

      // Rotate back, but keep transition style
      seventhRotated = false
      seventhBlockDiv.style.removeProperty('transform')
    }
  },
  {
    color: 'aqua',
    onClick: () => {
      // Grab seventh block and change it's color every second
      const seventhBlockDiv = document.getElementById('block-7')

      setInterval(() => {
        seventhBlockDiv.style.backgroundColor = `#${Math.random().toString(16).substr(-6)}`
      }, 1000)
    }
  },
  {
    color: 'aquamarine',
    onClick: () => location.reload()
  },
  {
    color: 'cadetblue',
    onClick: () => window.open('https://www.youtube.com/watch?v=LeMVDuIO3J0', '_blank')
  }
]

// Get blocks container
const blocksContainer = document.getElementById('blocksContainer')

// Render the blocks
function renderBlocks () {
  blocks.forEach((block, index) => {
    const blockDiv = document.createElement('div')

    // Add block ID to div for future reference
    blockDiv.id = `block-${index + 1}`
  
    // Add the base class
    blockDiv.classList.add('block')
  
    // Add color if the block has that
    if (block.color) {
      blockDiv.style.backgroundColor = block.color
    } 
    
    // Add a onclick event listener if block has it
    if (block.onClick) {
      blockDiv.style.cursor = 'pointer'
      blockDiv.onclick      = block.onClick
    }

    // Add a onhover event listener if block has it
    if (block.onHover) {
      blockDiv.onmouseover = block.onHover
    } 
  
    // Add block to the container
    blocksContainer.appendChild(blockDiv)
  })
}

// Initial render
renderBlocks()
